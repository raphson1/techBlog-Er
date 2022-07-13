const router = require('express').Router();
const userRoutes = require('./user-route');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;