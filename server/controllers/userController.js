const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const User = require("./../model/userModel");

exports.updateProfile = catchAsync(async (req, res, next) => {
  const { firstName, lastName, photo } = req.body;

  console.log(req.user);

  if (!firstName || !lastName) {
    return next(new AppError("Please provide your first and last name", 400));
  }
  const currentUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      firstName,
      lastName,
      photo,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: currentUser,
  });
});

exports.getUserProfile = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  console.log(userId);
  const links = await User.find({ _id: userId }).select("-__v");
  console.log(links);
  res.status(200).json({
    status: "success",
    data: {
      user: links,
    },
  });
});
