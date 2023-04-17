const mongoose = require('mongoose');
const URI = "mongodb://0.0.0.0:27017/videos";

mongoose.connect(URI)
    .then(db=> console.log("connected"))
    .catch(err => console.log(err));

module.exports = mongoose;