const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true // removes extra spaces from start/end
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
