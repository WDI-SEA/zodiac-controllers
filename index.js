const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

//home route
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))





app.get('/water', (req, res) => {
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const water = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {water, waterSigns})
    // res.render('water.ejs', {waterSigns})

})

app.get('/fire', (req, res) => {
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fire, fireSigns})
})
app.get('/earth', (req, res) => {
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earth,earthSigns})
})



app.listen(8000, () => {
    console.log('Listening to port 8000 🌍');
})