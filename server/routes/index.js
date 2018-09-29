const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

//landing page
router.get('/', (req, res) => {
  res.render('landing', {title: 'Welcome | ePratt.net'});
});

router.get('/me', (req, res) => {
  res.render('me', {title: 'About | ePratt.net'});
});

router.post('/signup', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email
  });
  newUser.save((err) => {
    if (err) {
      return console.log('error with that one' , err);
    }
    res.render('success', {title: 'Thanks! | epratt.net'});
  });
});

module.exports = router;