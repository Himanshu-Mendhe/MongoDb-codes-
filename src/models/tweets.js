const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    comments: [
        {
            content: {
                type: String,
                required: true
            }
        }
    ]
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process() {
    return this.content + "\n" + "is created by: " + this.email;
})

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;