require("dotenv").config();
const express = require("express");
const path = require("path"); // inbuilt so no need to install
let allPostsData = require("../utils/mockData");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname,"../public/images")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//APIs

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts: allPostsData});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT}`);
});
