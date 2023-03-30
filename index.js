const express = require ("express")

const app = express()

const PORT = 8088

app.set('view engine', 'ejs')
app.use(express.static("public"))

const waterSigns = ['Cancer', 'Scorpio', 'Pisces'];
const airSigns = ['Gemini', 'Libra', 'Aquarius'];
const fireSigns = ['Aries', 'Leo', 'Sagittarius'];
const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
  });
  
  app.get('/water', (req, res) => {
    res.send('This is the water signs page!');
  });
  
  app.get('/air', (req, res) => {
    res.send('This is the air signs page!');
  });
  
  app.get('/fire', (req, res) => {
    res.send('This is the fire signs page!');
  });
  
  app.get('/earth', (req, res) => {
    res.send('This is the earth signs page!');
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