const { User } = require('../models');

const userData = [
    {
        name: 'Eric',
        email: 'eric@gmail.com',
        password: 'coding1!'
    },
    {
        name: 'Raphson',
        email: 'raphson@gmail.com',
        password: 'coding1!'
    }
];

const userSeeds = () => User.bulkCreate(userData);

module.exports = userSeeds;