const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    // each comment can only relates to one blog, so it's not in array
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;