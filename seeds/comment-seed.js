const { Comment } = require('../models');
const blogSeeds = require('./blog-seed');

const commentData = [
    {
        commentBody : 'Discipline is everything',
        user_id: 1,
        blog_id: 2
    },
    {
        commentBody: 'consistancy is the key to success',
        user_id: 2,
        blog_id: 1
    }
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds