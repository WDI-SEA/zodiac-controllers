const express = require('express')
const app = express();
const layout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(layout)
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('index.ejs')
});

// // AIR ROUTE
// app.get('/air', (req, res) => {
//     let airSigns = ['Aquarius', 'Gemini','Libra']
//     let airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
//     res.render('elementDisplay', {signs: airSigns, traits: airTraits})
// })

// // WATER ROUTE
// app.get('/water', (req, res) => {
//     let waterSigns = ['Pisces', 'Cancer','Scorpio']
//     let waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
//     res.render('elementDisplay', {signs: waterSigns, traits: waterTraits})
// });

// // FIRE ROUTE
// app.get('/fire', (req, res) => {
//     let fireSigns = ['Aries', 'Leo','Sagittarius']
//     let fireTraits = ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
//     res.render('elementDisplay', {signs: fireSigns, traits: fireTraits})
// });

// // EARTH ROUTE
// app.get('/earth', (req, res) => {
//     let earthSigns = ['Taurus', 'Virgo','Capricorn']
//     let earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
//     res.render('elementDisplay', {signs: earthSigns, traits: earthTraits})
// });

// Tells express what port to run my server on
app.listen(3000);
console.log("You're listening to port 3000!");