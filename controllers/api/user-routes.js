const router = require('express').Router();
const { User } = require('../../models');

// Create new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
    console.error('Failed to create new user.');
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Email not found' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      resizeBy.status(400).json({ message: 'Incorrct password' });
      returnl
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
    
      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
      
  } catch (err) {
    res.status(500).json(err);
    console.error('Failed to login.');
  }
});

module.exports = router;