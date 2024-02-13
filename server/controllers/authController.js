const { promisify } = require("util");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const User = require("./../model/userModel");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../utils/email");
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

function createSendToken(user, statusCode, res) {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
}

exports.signup = catchAsync(async (req, res, next) => {
  // create new user from request body
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  // Call the method to create the email verification token
  const verificationToken = newUser.createEmailVerificationToken();

  // Save the user to the database
  await newUser.save();

  // Construct the verification link using the token
  const verificationLink = `${req.protocol}://${req.get(
    "host"
  )}/devlinks-api/v1/users/verify-email?token=${verificationToken}`;

  // Construct the email options
  const emailOptions = {
    email: req.body.email,
    subject: "Email Verification",
    message: `Please click the following link to verify your email address: <a href="${verificationLink}">Verify Email</a>`,
  };

  // Send verification email
  await sendEmail(emailOptions);

  res.status(201).json({
    status: "success",
    message: "Verification email sent. Please verify your email address.",
  });
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  // Get the token from the query string
  const { token } = req.query;

  // Convert the token to a hashed value
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // Find the user with the hashed token
  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationTokenExpires: { $gt: Date.now() }, // Check if the token is not expired
  });

  // Send an error response if the user is not found
  if (!user) {
    return next(new AppError("Invalid or expired verification token.", 400));
  }

  // Update the user's verification status
  user.isVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationTokenExpires = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "success",
    message: "Email verified successfully.",
  });

  next();
});

exports.login = catchAsync(async (req, res, next) => {
  // Get email and password from request body
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return next(new AppError("Please provide email and password.", 400));
  }

  // Find the user with the email in our database
  const user = await User.findOne({ email }).select("+password");

  // send an error response if the user is not found or the password is incorrect
  if (!user || !(await user.matchPassword(password, user.password))) {
    return next(new AppError("Invalid email or password.", 401));
  }

  // Create a token for the user
  createSendToken(user, 200, res);
});
