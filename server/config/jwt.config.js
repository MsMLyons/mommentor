// create own middleware
// if user not logged in, send error response back

/*const jwt = require('jsonwebtoken');

module.exports = {
    authenticate(req, res, next) {
        jwt.verify(req.cookies.usertoken, 
            process.env.JWT_SECRET,
            // once the unhashed version of the cookie is compared, run the callback function
            (err, payload) => {
                if(err) {
                    // this is not a valid token OR the cookie does not exist
                    res.status(401).json({ verified: false });
                } else {
                    // error null so verified correctly
                    console.log("All good to proceed");
                    next();
                }
            }
        )
    }
}*/