//setup express and access to our port from client
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;

//setup middlewere, SET the middlewere
app.set('view engine', 'ejs');
app.use(ejsLayouts)



//Welcome to our port. Here are your options.
app.get('/', (req, res) => {
  res.render('home');
});
//EARTH first bcuz Capricorns rock
app.get('/earth', (req, res) => {
  res.render('earth', { earthTraits: [['Taurus', 'Virgo', 'Capricorn'], ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']] });
});
//WATER
app.get('/water', (req, res) => {
  res.render('water', { waterTraits: [['Pisces', 'Cancer', 'Scorpio'], ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']] });
});
//AIR
app.get('/air', (req, res) => {
  res.render('air', { airTraits: [['Aquarius', 'Gemini', 'Libra'], ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']] });
});
//FIRE
app.get('/fire', (req, res) => {
  res.render('fire', { fireTraits: [['Aries', 'Leo', 'Sagittarius'], ['passionate', 'strong emotions', 'temperamental', 'accomplished', 'interesting']] });
});

  


app.listen(port, () => {
  console.log(`Hello Nodemon from Port ${port}`);
});
