const express = require('express');
const router = express.Router();

//landing page
router.get('/', (req, res) => {
  res.render('landing', {title: 'epratt | Developer', layout: 'no-header'});
});

module.exports = router;