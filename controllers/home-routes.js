const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// Render the homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({ include: User });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);

    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
    console.log('Unable to render homepage');
  }
});

// Render a post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { include: User });
    const post = postData.get({ plain: true });

    // Get comment data from the database
    const commentData = await Comment.findAll({
      where: { post_id: req.params.id },
      include: User
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    console.log(comments);

    res.render('post', { post, comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
    console.log(`Unable to render post ${req.params.id}`);
  }
});

// Render the dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.userId },
      include: User
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
    console.log('Unable to render dashboard');
  }
});

// Render login page
router.get('/login', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
    console.log('Unable to render login');
  }
});

module.exports = router;