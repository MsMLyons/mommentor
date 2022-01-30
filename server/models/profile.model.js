const mongoose = require('mongoose');

// use the ObjectId to pull in data from user model
const ProfileSchema = new mongoose.Schema({
    /*user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user' 
    },*/
    firstName: {
        type: String,
        required: [ true, "First Name is required" ],
    },
    lastName: {
        type: String,
        required: [ true, "Last Name is required" ],
    },
    email: {
        type: String,
        required: [ true, "Email is required" ],
    },
    birthdate: {
        type: Date,
        default: new Date,
        required: [ true, "Birthdate is required" ],
    },
    location: {
        type: String,
        required: [ true, "Location is required" ],
    },
    accountType: {
        type: String,
        required: [ true, "Account Type is required" ],
    },
    avatar: {
        type: String
    },    
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema);