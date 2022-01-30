const Post = require('../models/post.model');

module.exports.getAll = (req, res) => {
    console.log("Retrieving all forum posts");

    Post.find({})
        .then((allPosts) => {
            console.log("All posts retrieved");
            res.json(allPosts);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.create = (req, res) => {
    console.log("Creating a post");
    console.log(req.body);

    Post.create(req.body)
        .then((newPost) => {
            console.log(newPost);
            res.json(newPost);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports.update = (req, res) => {
    console.log("Updating Post");
    console.log("Updating id: " + req.params.id);
    console.log(req.body);

    Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        // runValidators: true,
    })
        .then((updatedPost) => {
            console.log(updatedPost);
            res.json(updatedPost);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports.delete = (req, res) => {
    console.log("Deleting a post");
    console.log("Updating id: " + req.params.id);

    Post.findByIdAndDelete(req.params.id)
        .then((deletedPost) => {
            console.log(deletedPost);
            res.json(deletedPost);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
}