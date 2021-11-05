const express = require('express');
const app = express();

const ejsLayouts = require('express-ejs-layouts');

//Middleware for express ejs layouts
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res) => {
  const air = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked'];
  const water = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive'];
  const fire = [
    'Passionate',
    'Strong Emotions',
    'Temperamental',
    'Energetic',
    'Accomplished',
    'Interesting',
  ];
  const earth = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable'];
  res.render('home.ejs', { air, water, fire, earth });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
