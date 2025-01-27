const express = require("express");
const path = require("path"); // inbuilt so no need to install
let allPostsData = require("../utils/mockData");
const {v4: uuidv4} = require("uuid");
require("dotenv").config();

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//APIs








app.listen(process.env.PORT, ()=>{console.log(`Server running at localhost: ${process.env.PORT}`)});

