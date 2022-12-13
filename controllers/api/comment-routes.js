const router =  require('express').Router();
const { Comment } = require('../../models');

// Create a comment
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

// Update a comment
router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(
      { comment: req.body.comment },
      { where: { id: req.params.id } }
    );

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
    console.error('Unable to update comment');
  }
});

//Delete a comment
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({ where: { id: req.params.id } });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
    console.error('Unable to delete comment.');
  }
});

module.exports = router;