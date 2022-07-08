const sequelize = require('../config/connection');
const userSeeds = require('./user-seed');
const blogSeeds = require('./blog-seed');

const seedAll = async() => {
    await sequelize.sync({force: true});
    console.log('\n---------- Database Synced')
    await userSeeds();
    console.log('\n---------- User Synced');
    await blogSeeds();
    console.log('\n---------- Blog Synced');

    process.exit(0);
};

seedAll()