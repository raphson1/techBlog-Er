const router = require('express').Router();
const  { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
});