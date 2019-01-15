const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))
app.set('view engine', 'nunjucks');

const indexRoute = require('./routes');
const navRoutes = require('./routes/header.js');

app.use(indexRoute);
app.use(navRoutes);

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.listen(3000, () => {
  console.log('Heck yeah, the application is running on localhost:3000')
});