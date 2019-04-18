const express = require('express');
const router = express.Router();

// router.get('/events', (req, res) => {
//   res.render('events.html')
// });

router.get('/high-line', (req, res) => {
  res.render('high-line.html')
});

router.get('/death-valley', (req, res) => {
  res.render('death-valley.html')
});

router.get('/interiors', (req, res) => {
  res.render('interiors.html')
});

router.get('/construction', (req, res) => {
  res.render('construction.html')
});

module.exports = router;