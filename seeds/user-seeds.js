const { User } = require('../models');

const userData = [{
        username: 'RobertB',
        password: 'RBpassword'

    },
    {
        username: 'LukeC',
        password: 'Velcro1000'
    },
    {
        username: 'MrMartin',
        password: 'OhMyGolf'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;