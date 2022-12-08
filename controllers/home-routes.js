const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// Render the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts });

  } catch (err) {
    res.status(500).json(err);
    console.log('Unable to render homepage');
  }
});

module.exports = router;