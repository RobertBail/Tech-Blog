const { Post } = require('../models');

const postData = [{

        title: 'AI project goes public',
        content: 'It is a triumph of our team and skills. Well done.',
        user_id: 1
    },
    {
        title: 'Work Day Scheduler app reaches 1 million users',
        content: 'A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time',
        user_id: 2
    },
    {
        title: 'Smell-O-Vision app released',
        content: 'The latest in Smell-O-Vision tech. It is the perfect tool for online fragrance shopping and retailers.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;