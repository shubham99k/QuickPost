const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Post = require("./models/post");

// Middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/quickpost");
    console.log("Connected to MongoDB");
}
main().catch(err => console.log(err));

// Home redirect
app.get("/", (req, res) => {
    res.redirect("/posts");
});

// Index Route - Show all posts
app.get("/posts", async (req, res) => {
    let posts = await Post.find();
    res.render("index.ejs", { posts });
});

// New Post Form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Create Post
app.post("/posts", async (req, res) => {
    const { username, title, content } = req.body; // ✅ Added username
    await Post.create({ username, title, content });
    res.redirect("/posts");
});

// Show in detail post
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("show", { post });
});

// Edit Post Form
app.get("/posts/:id/edit", async (req, res) => {
    const { id } = req.params;
    let post = await Post.findById(id);
    res.render("edit.ejs", { post });
});

// Update Post
app.put("/posts/:id", async (req, res) => {
    const { id } = req.params;
    const { username, title, content } = req.body; // ✅ Added username
    await Post.findByIdAndUpdate(id, { username, title, content });
    res.redirect("/posts");
});

// Delete Post
app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/posts");
});

// Server start
app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});
