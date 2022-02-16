const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // a blog post can have multiple comments, so it should be in a array.
    // all comments info should be kept in this array of this blog post.
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }, ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;