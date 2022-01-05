const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Image = require("./models/image");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "../frontend/build")));

mongoose
  .connect("mongodb://localhost:27017/imagedb", { useNewUrlParser: true })
  .then(() => {
    console.log("Mongo connection successful");
  })
  .catch((err) => {
    console.log(`Mongo Connection failed, Error:- ${err}`);
  });

app.get("/api/", async (req, res) => {
  console.log("Home page");
  Image.find({}, (err, images) => {
    if (err) console.log(err);
    res.json({ data: [...images], message: "Images fetched successfully" });
  });
});

app.get("/api/show/:id", async (req, res) => {
  const foundImage = await Image.findById(req.params.id);
  res.json({ data: foundImage, message: "Image fetched successfully" });
});

app.get("/api/new", (req, res) => {
  console.log("New page");
});

app.post("/api/", async (req, res) => {
  const newImage = new Image({
    ImgName: req.body.ImgName,
    ImgUrl: req.body.ImgUrl,
    ImgDetails: req.body.ImgDetails,
  });
  await newImage
    .save()
    .then((msg) => {
      res.json({ ...msg, message: "Image added successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/api/:id/edit", async (req, res) => {
  const { id } = req.params;
  const updateImage = await Image.findByIdAndUpdate(id, req.body, {
    runValidators: true,
  });
  res.json({ data: { ...updateImage }, message: "Image updated successfully" });
});

app.delete("/api/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Image.findByIdAndDelete(id);
  res.json({
    message: "Image deleted successfully",
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5050");
});