const Profile = require('../models/profile.model');

module.exports.getAll = (req, res) => {
    console.log("Get all profiles");

    Profile.find({})
        .then((allProfiles) => {
            console.log("All profiles");
            res.json(allProfiles);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.create = (req, res) => {
    console.log("Create profile");
    console.log(req.body);

    Profile.create(req.body)
        .then((newProfile) => {
            console.log(newProfile);
            res.json(newProfile);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports.getOne = (req, res) => {
    console.log("Get one profile");
    console.log("Searching for id: " + req.params.id);

    Profile.findById(req.params.id)
        .then((oneProfile) => {
            console.log(oneProfile);
            res.json(oneProfile);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports.update = (req, res) => {
    console.log("updating profile");
    console.log("Updating id: " + req.params.id);
    console.log(req.body);

    Profile.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        // runValidators: true,
    })
        .then((updatedProfile) => {
            console.log(updatedProfile);
            res.json(updatedProfile);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports.delete = (req, res) => {
    console.log("Deleting a profile");
    console.log("Updating id: " + req.params.id);

    Profile.findByIdAndDelete(req.params.id)
        .then((deletedProfile) => {
            console.log(deletedProfile);
            res.json(deletedProfile);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
}