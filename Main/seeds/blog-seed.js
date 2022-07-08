const { blog, Blog } = require('../models');

const blogData = [
    {
        title: 'Success',
        description: 'Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.',
        user_id: 1
    },
    {
        title: 'Discipline',
        description: 'Confidence comes from discipline and training.',
        user_id: 2
    }
];

const blogSeeds = () => Blog.bulkCreate(blogData);
module.exports = blogSeeds