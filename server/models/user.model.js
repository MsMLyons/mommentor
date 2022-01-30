const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name required"],
    },
    lastName: {
        type: String,
        required: [true, "Last name required"],
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password required"],
        minLength: [8, "Password must be at least 8 characters"],
    },
    // confirm password not included here to avoid inclusion in collection
}, { timestamps: true });

// Virtual field stores info from request, but not to collection / DB
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value);

// middleware works in the middle of a process 
// then continues with the next step (function), as though
// the process had never been interrupted
// .pre is where we have middleware step into the process 

UserSchema.pre("validate", function (next) {
    console.log("testing pre-validate");
    if(this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match!");
    } 
    next();    
});

UserSchema.pre("save", function(next) {
    console.log("testing pre-save");
    // encrypt password before saving to database 
    // passwords already match
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            // update the password in this instance to use the hashed returned version
            this.password = hashedPassword;
            next();
        })
        .catch((err) => {
            console.log(err);
            console.log("Error while hashing password");
        });
});

// User will become the name of the collection
// but mongoose will make it lowercase and plural
// collection name: users
const User = mongoose.model('User', UserSchema);

module.exports = User;