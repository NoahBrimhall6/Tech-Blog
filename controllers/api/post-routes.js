const router = require('express').Router();
const { Post } = require('../../models');

// Create a post
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

// Update a post
router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(
      { 
        title: req.body.title,
        body: req.body.body
      },
      { where: { id: req.params.id } }
    );

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.log('Failed to update post.');
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({ where: { id: req.params.id } });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.log('Failed to update post.');
  }
});

module.exports = router;