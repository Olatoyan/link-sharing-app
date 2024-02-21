const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  link: {
    type: String,
    required: [true, "Please add a link"],
  },
});

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
