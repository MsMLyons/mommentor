const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
        console.log("in register");
        console.log(req.body);

        // use request data and user model constructor to create user object
        const user = new User(req.body);

        user.save()
            .then((newUser) => {
                console.log("Success!!!!!!!!!!!!!!!!")
                console.log(newUser);
                console.log("Successfully registered");
                res.json({
                    message: 'Successfully registered',
                    user: newUser
                })
            })
            .catch((err) => {
                console.log("Registration failed");
                res.status(400).json(err);
            });
    },

    // login
    login: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((userRecord) => {
                //check returned object is null
                if(userRecord === null) {
                    // email not found in the collection / DB
                    res.status(400).json({ message: "Invalid Login Attempt" });
                } else {
                    // email address found
                    // compare address given in request with one stored in DB
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid) => {
                            if(isPasswordValid) {
                                console.log("Password is Valid");
                                console.log(process.env.JWT_SECRET);
                                res.cookie("usertoken", // name of the cookie
                                    jwt.sign({ 
                                        // data to save
                                        user_id: userRecord._id,
                                        email: userRecord.email,
                                    }, 
                                    process.env.JWT_SECRET), // used to sign/hash data in the cookie
                                    {
                                        // give configuration settings for cookie
                                        secure: true,
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 9000) 
                                    }
                                )
                                .json({ 
                                    message: "Successfully logged in",
                                    userLoggedIn: userRecord.username
                                })
                            } else {
                                // passwords didn't match
                                res.status(400).json({ message: "Invalid Login Attempt" });
                            }
                        })
                        .catch((err) => {
                            console.log("Error with compare passwords");
                            res.status(400).json({ message: "Invalid Login Attempt" });
                        })
                }
            })
            .catch((err) => {
                console.log("Error with findOne");
                res.status(400).json({ message: "Invalid Login Attempt" });
            })
    },

    logout: (req, res) => {
        console.log("Logging out");
        res.clearCookie("usertoken"); // same name as above for saving the cookie
        res.json({ message: "You have successfully logged out"})
    }
}
