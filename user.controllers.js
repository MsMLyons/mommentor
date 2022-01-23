// this is a controller file and will need to be placed in the correct folder 

// add imports

// Registrations snippet

register: (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    }