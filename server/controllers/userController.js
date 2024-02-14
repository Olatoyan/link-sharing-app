const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
const User = require("./../model/userModel");

exports.updateProfile = catchAsync(async (req, res, next) => {
  const { firstName, lastName } = req.body;

  console.log(req.user);

  if (!firstName || !lastName) {
    return next(new AppError("Please provide your first and last name", 400));
  }
  const currentUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      firstName,
      lastName,
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: "success",
    data: currentUser,
  });
});
