const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))
app.set('view engine', 'nunjucks');

const indexRoute = require('./routes/homepage.js');
const navRoutes = require('./routes/nav.js');

app.use(indexRoute);
app.use(navRoutes);

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// app.listen(3000, () => {
//   console.log('Heck yeah, the application is running on localhost:3000')
// });
app.listen(port, function () {
  console.log(`App listening on port 3000!`);
 });