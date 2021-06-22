const mongoose = require("mongoose");

const blogsSchema = {
    title:String,
    content: String
}

const Blog = mongoose.model("Blog", blogsSchema);

module.exports = Blog;