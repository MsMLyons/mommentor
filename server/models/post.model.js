const mongoose = require('mongoose');

// use the ObjectId to pull in data from user model
const PostSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [ true, "Topic is required" ],
    },
    title: {
        type: String,
        required: [ true, "Title is required" ],
    },
    postBody: {
        type: String,
        required: [ true, "Post must not be blank" ],
    },       
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
