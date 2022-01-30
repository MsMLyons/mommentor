const PostController = require('../controllers/post.controller');

module.exports = (app) => {
    app.get("/forum", PostController.getAll);
    app.post("/forum/new", PostController.create);
    app.get("/forum/:id", PostController.getOne);
    app.put("/forum/:id/edit", PostController.update);
    app.delete("/forum/:id", PostController.delete);
}