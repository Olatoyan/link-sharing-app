const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  link: {
    type: String,
    required: [true, "Please add a link"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false,
  },
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
