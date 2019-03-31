const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  res.render('maintainance.hbs');
  next();
});

hbs.registerHelper('currentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
app.get('/', (req, res) => {
  res.render('home.hbs', {
    welcomeMessage: 'Hello and welcome!',
    pageTitle : 'Home page',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle : 'About page',
  });
});

app.get('/bad', (request, response) => {
  response.send({
    errorMessage: 'Error:unknown!'
  });
});
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
