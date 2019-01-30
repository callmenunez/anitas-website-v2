const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home.html')
});

router.get('/events', (req, res) => {
  res.render('events.html')
});

router.get('/environments', (req, res) => {
  res.render('construction.html')
});

router.get('/travel', (req, res) => {
  res.render('travel.html')
});

module.exports = router;