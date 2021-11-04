const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/water', require('./controllers/water.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/air', require('./controllers/air.js'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/water', (req, res) => {
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const water = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterSigns: waterSigns, water: water})
})

app.get('/air', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const air = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns: airSigns, air: air})
})

app.get('/fire', (req, res) => {
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fire = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireSigns: fireSigns, fire: fire})
})

app.get('/earth', (req, res) => {
    const earthSigns = ['Tarus', 'Virgo', 'Capricorn']
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns: earthSigns, earth: earth})
})

app.listen(8000, () => {
    console.log('connected')
})