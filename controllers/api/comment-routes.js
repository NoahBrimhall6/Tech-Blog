const router =  require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      user_id: req.session.userId,
      post_id: req.body.post_id
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }

  console.log(`Comment: ${req.body.comment}  user_id: ${req.session.userId}  post_id: ${req.body.post_id}`);
});

module.exports = router;