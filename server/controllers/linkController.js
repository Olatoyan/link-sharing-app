const { default: mongoose } = require("mongoose");
const Link = require("../model/linkModel");
const catchAsync = require("./../utils/catchAsync");

exports.addLink = catchAsync(async (req, res, next) => {
  const { name, link } = req.body;
  // Delete existing links corresponding to the user
  await Link.deleteMany({ user: req.user._id });

  const newLink = await Link.create({
    name,
    link,
    user: req.user._id,
  });
  res.status(201).json({
    status: "success",
    data: newLink,
  });
});

exports.getAllLinksPerUser = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const links = await Link.find({ user: userId });
  res.status(200).json({
    status: "success",
    data: {
      links,
    },
  });
});

exports.getAllLinksPerUserOffline = catchAsync(async (req, res, next) => {
  const userId = req.query.id;

  const links = await Link.find({ user: userId });
  res.status(200).json({
    status: "success",
    data: {
      links,
    },
  });
});
