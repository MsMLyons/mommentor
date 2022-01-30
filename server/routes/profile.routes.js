const ProfileController = require('../controllers/profile.controller');

// see restaurants project RestaurantController for example on authentication
// to allow only a logged in user to create a profile

module.exports = (app) => {
    app.get("/api/profile/viewAll", ProfileController.getAll);
    app.post("/api/profile/new", ProfileController.create);
    app.get("/api/profile/:id", ProfileController.getOne);
    app.put("/api/profile/edit/:id", ProfileController.update);
    app.delete("/api/profile/:id", ProfileController.delete);
}