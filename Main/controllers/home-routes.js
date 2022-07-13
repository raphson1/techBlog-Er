const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');


module.exports = router