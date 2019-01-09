const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
  res.render('about.html')
});
router.get('/party', (req, res) => {
  res.render('party.html')
});
router.get('/wedding', (req, res) => {
  res.render('wedding.html')
});
router.get('/construction', (req, res) => {
  res.render('construction.html')
});
router.get('/interiors', (req, res) => {
  res.render('interiors.html')
});
router.get('/landscape', (req, res) => {
  res.render('landscape.html')
});
router.get('/india', (req, res) => {
  res.render('india.html')
});
router.get('/hongkong', (req, res) => {
  res.render('hongkong.html')
});
router.get('/europe', (req, res) => {
  res.render('europe.html')
});

module.exports = router;