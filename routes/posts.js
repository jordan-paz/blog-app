const { check, validationResult } = require("express-validator/check");
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const auth = require("../middleware/auth");

//  @route:         POST /posts
//  @description:   Create a new blog post
//  @access:        Only me
router.post(
  "/posts",
  [
    auth,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, text } = req.body;
      const post = await new Post({ title, text });
      await post.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route:         GET /posts
//  @description:   Get all posts
//  @access:        Public
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//  @route:         GET /posts/:postId
//  @description:   Get one post by id
//  @access:        Public
router.get("/posts/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//  @route:         PUT /posts/:postId
//  @description:   Edit a post
//  @access:        Only me
router.put("/posts/:postId", auth, async (req, res) => {
  try {
    const { title, text } = req.body;
    let post = await Post.findById(req.params.postId);
    if (title) post.title = title;
    if (text) post.text = text;
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//  @route:         DELETE /posts/:postId
//  @description:   Delete a post
//  @access:        Only me
router.delete("/posts/:postId", auth, async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.postId });
    res.json({ msg: "Post deleted." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
