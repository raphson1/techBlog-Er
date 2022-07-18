const sequelize = require('../config/connection');
const userSeeds = require('./user-seed');
const blogSeeds = require('./blog-seed');
const commentSeeds = require('./comment-seed')

const seedAll = async() => {
    await sequelize.sync({force: true});
    console.log('\n---------- Database Synced')
    await userSeeds();
    console.log('\n---------- User Synced');
    await blogSeeds();
    console.log('\n---------- Blog Synced');
    await commentSeeds();
    console.log('\n---------- Comments Synced')


    process.exit(0);
};

seedAll()