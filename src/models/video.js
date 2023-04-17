const mongoose = require('mongoose');
const { Schema } = mongoose;

const VideoSchema = new Schema({
    title: {type: String, required: true},
    description:{type:String, required: true},
    path:{type:String, required: true},
    imgPath:{type:String, required: true}
});

module.exports = mongoose.model("Video", VideoSchema);