require("dotenv").config();
const express = require("express");
const path = require("path"); // inbuilt so no need to install
let allPostsData = require("../utils/mockData");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname,"../public/images")))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//APIs

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts: allPostsData});
});

app.get("/posts/:id/comments", (req, res)=>{
    const {id} = req.params;
    let post = allPostsData.find((p)=>(p.id == id));
    res.render("comments.ejs", {post});
});
app.post("/posts/:id/comments", (req, res)=>{
    const {id} = req.params;
    const newComment = req.body.comment.toString();

    let post = allPostsData.find((p)=>(p.id == id));
    post.comments.unshift(newComment);

    // res.redirect("/posts/"+id+"/comments");  /* Did work*/
    res.redirect(`/posts/${id}/comments`);
});

app.get("/posts/:id/edit", (req, res)=>{
    const {id} = req.params;
    let post = allPostsData.find((p)=>(p.id == id));
    res.render("editPost.ejs", {post});
});
app.patch("/posts/:id/edit", (req, res)=>{
    const {id} = req.params;
    const newCaption = req.body.caption.toString();
    let post = allPostsData.find((p)=>(p.id == id));
    post.caption = newCaption;

    res.status(200).redirect("/posts");
});

app.get("/posts/:id/likes", (req, res)=>{
  const {id} = req.params;
  let post = allPostsData.find((p)=>(p.id == id));

  post.likes += 1;
  res.status(200).redirect("/posts");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT}`);
});
