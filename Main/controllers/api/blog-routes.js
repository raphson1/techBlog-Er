const router = require('express').Router();
const  { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.put('/:id', withAuth,  async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user.id,
            }
        });
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user.id,
            }
        });
        if(!blogData) {
            res.status(400).json({message: 'No Blog found with this id!'});
            return;
        }
        res.status(200).json({message: 'Blog successfully Deleted'});
    } catch (err) {
        res.status(500).json(err)
    }
});
router.get('/', async(req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{
                model: Comment
            }]
        });
        res.status(200).json(blogData)
    } catch(err) {
      res.status(500).json(err)
    }
})

module.exports = router;