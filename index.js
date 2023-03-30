const express = require ("express")

const app = express()

const PORT = 8088

app.set('view engine', 'ejs')
app.use(express.static("public"))

const waterSigns = ['Cancer', 'Scorpio', 'Pisces'];
const waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
const airSigns = ['Gemini', 'Libra', 'Aquarius'];
const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
const fireSigns = ['Aries', 'Leo', 'Sagittarius'];
const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']


app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/water', (req, res) => {
    res.render('water', {
        signs: waterSigns,
        traits: waterTraits
    });
  });
  
  app.get('/air', (req, res) => {
    res.render('air', {
        signs: airSigns,
        traits: airTraits
    });
  });
  
  app.get('/fire', (req, res) => {
    res.render('fire', {
        signs: fireSigns,
        traits: fireTraits
    });
  });
  
  app.get('/earth', (req, res) => {
    res.render('earth', {
        signs: earthSigns,
        traits: earthTraits
    });
  });
  
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });


// CONTROLLERS
// app.use('/loveit', require('./controllers/loveit'));
// app.use('/leaveit', require('./controllers/leaveit'));

// app.get("/", (req, res) => {
//     res.render("home")
// })

app.listen(PORT, () => {
    console.log(`order up on port ${PORT}`)
})