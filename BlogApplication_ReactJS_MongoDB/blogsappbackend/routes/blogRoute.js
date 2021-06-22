const express = require("express");
const router = express.Router();
const Blog = require("../models/nodeModel");


router.route("/create").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newBlog = new Blog({
        title,
        content
    });
    newBlog.save();
});

router.route("/blogs").get((req, res) => {
    Blog.find()
        .then(foundBlogs => res.json(foundBlogs))
})

module.exports = router;