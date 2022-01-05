const mongoose = require("mongoose");
const Image = require("./models/image");

mongoose
  .connect("mongodb://localhost:27017/imagedb", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo connection successful");
  })
  .catch((err) => {
    console.log(`Mongo Connection failed, Error:- ${err}`);
  });

const imgArr = [];

Array(21)
  .fill()
  .forEach((_, i) => {
    imgArr.push({
      ImgName: `Image ${i}`,
      ImgUrl: `https://picsum.photos/id/${(i + 1) * 11}/800/800`,
      ImgDetails: `Image ${i} details`,
    });
  });

Image.deleteMany({})
  .then(() => {
    console.log("Deleted all images");
  })
  .catch((err) => {
    console.log(`Error deleting all images, Error:- ${err}`);
  });

Image.insertMany(imgArr)
  .then((res) => {
    console.log(res);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
