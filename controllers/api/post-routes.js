const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.userId
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.error('Failed to create post.');
  }
});

module.exports = router;