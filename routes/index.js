const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html')
});

router.get('/events', (req, res) => {
  res.render('party.html')
});

router.get('/environments', (req, res) => {
  res.render('construction.html')
});

router.get('/travel', (req, res) => {
  res.render('india.html')
});

module.exports = router;