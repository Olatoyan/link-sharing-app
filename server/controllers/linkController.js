const { default: mongoose } = require("mongoose");
const Link = require("../model/linkModel");
const catchAsync = require("./../utils/catchAsync");
const User = require("../model/userModel");

exports.addLink = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  // Retrieve the user by ID
  const user = await User.findById(userId);

  // Extract the IDs of the links sent by the user
  const sentLinkIds = req.body.map((linkData) => linkData.id);

  // Find the IDs of the links that need to be deleted from the user's links array
  const linksToDeleteIds = user.links.filter(
    (linkId) => !sentLinkIds.includes(linkId)
  );

  // Delete the links that were not sent by the user from the user's links array
  user.links = user.links.filter((linkId) => sentLinkIds.includes(linkId));

  // Save the updated user document
  await user.save({ validateBeforeSave: false });

  // Delete the links that were not sent by the user from the Link collection
  await Link.deleteMany({ _id: { $in: linksToDeleteIds } });

  const createdLinks = [];
  for (const linkData of req.body) {
    const { id, name, link } = linkData;

    const newLink = await Link.create({
      id,
      name,
      link,
    });

    // Push the newly created link's reference into the user's links array
    user.links.push(newLink);
    await user.save({ validateBeforeSave: false });

    createdLinks.push(newLink);
  }

  res.status(201).json({
    status: "success",
    data: createdLinks,
  });
});

exports.getAllLinksPerUser = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const user = await User.findById(userId).populate("links").select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      links: user.links,
    },
  });
});

exports.getAllLinksPerUserOffline = catchAsync(async (req, res, next) => {
  const userId = req.query.id;

  const links = await User.findById(userId).populate("links").select("-__v");

  res.status(200).json({
    status: "success",
    data: {
      links,
    },
  });
});
