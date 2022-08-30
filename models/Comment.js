const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    user: {type: String, required: true},
    body: {type: String, required: true},
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }
}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

