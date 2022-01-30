const mongoose = require('mongoose');

const dbName = "mommentorDB";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("You have successfully connected to the " + dbName + "database")
    })
    .catch((err) => {
        console.log("Error. The " + dbName + "database has encountered an error");
        console.log(err);
    })