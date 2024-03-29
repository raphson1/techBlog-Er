const router = require('express').Router();
const { Comment, User, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async(req, res) => {
    try {
        console.log(req.body)
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        })
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/', withAuth, async(req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{
                model: User,
            }]
        });
        res.status(200).json(commentData);
    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', withAuth, async(req, res) => {
    try{
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user.id,
            }
        });
        if(!commentData) {
            res.status(400).json({message: 'no comment found'});
            return;
        }
    } catch(err) {
        res.status(500).json(err)
    }
})
module.exports = router