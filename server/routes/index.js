const express = require('express');
const router = express.Router();

//landing page
router.get('/', (req, res) => {
  res.render('landing', {title: 'Welcome | ePratt.net'});
});

router.get('/me', (req, res) => {
  res.render('me', {title: 'About | ePratt.net'});
});

module.exports = router;