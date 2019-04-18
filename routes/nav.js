const express = require('express');
const router = express.Router();

// router.get('/about', (req, res) => {
//   res.render('about.html')
// });
router.get('/', (req, res) => {
  res.render('home.html')
});
router.get('/events', (req, res) => {
  res.render('events.html')
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
// router.get('/travel', (req, res) => {
//   res.render('travel.html')
// });
// router.get('/landscape', (req, res) => {
//   res.render('landscape.html')
// });
// router.get('/india', (req, res) => {
//   res.render('india.html')
// });
// router.get('/hongkong', (req, res) => {
//   res.render('hongkong.html')
// });
// router.get('/europe', (req, res) => {
//   res.render('europe.html')
// });

module.exports = router;