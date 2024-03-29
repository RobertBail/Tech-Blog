const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Job well done"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome stuff."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "OMG. This is great."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tech!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tech!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
