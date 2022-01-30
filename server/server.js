const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

require('./config/mongoose.config');

require('./routes/profile.routes')(app);
// require('./routes/user.routes')(app);
// require('./routes/post.routes')(app);

app.listen(8000, () => {
    console.log("Listening at port 8000")
})