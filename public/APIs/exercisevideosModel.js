const mongoose = require('mongoose');

const exVidSchema = new mongoose.Schema({
    exercise_name: String,
    exercise_url: String,
    exercise_tags: String
});

module.exports = mongoose.model('exercise_videos', exVidSchema)