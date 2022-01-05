const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  ImgName: {
    type: String,
    required: true,
  },
  ImgUrl: {
    type: String,
    required: true,
  },
  ImgDetails: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
