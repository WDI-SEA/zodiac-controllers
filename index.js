// require packages
const express = require('express')
const expresEjsLayouts = require('express-ejs-layouts')

// set up express app
const app = express()
const PORT = 8000

// VARIABLES
const air = {
    name: 'Air',
    signs: ['Aquarius', 'Gemini', 'Libra'],
    traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
}
const water = {
    name: 'Water',
    signs: ['Pisces', 'Cancer', 'Scorpio'],
    traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
}
const fire = {
    name: 'Fire',
    signs: ['Aries', 'Leo', 'Sagittarius'],
    traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
}
const earth = {
    name: 'Earth',
    signs: ['Taurus', 'Virgo', 'Capricorn'],
    traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
}

// configure app to use ejs
app.set('view engine', 'ejs')
app.use(expresEjsLayouts)
app.use('/Air', require('./controllers/air.js'))
app.use('/Water', require('./controllers/water.js'))
app.use('/Fire', require('./controllers/fire.js'))
app.use('/Earth', require('./controllers/earth.js'))
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
    // res.send('home page')
    res.render('index.ejs')
})

app.get('/Air', (req, res) => {
    // res.send('water')
    res.render('element.ejs', air)
})

app.get('/Water', (req, res) => {
    // res.send('air')
    res.render('element.ejs', water)
})

app.get('/Fire', (req, res) => {
    // res.send('fire')
    res.render('element.ejs', fire)
})

app.get('/Earth', (req, res) => {
    // res.send('earth')
    res.render('element.ejs', earth)
})

// PORT LISTENER
app.listen(PORT, () => {
    console.log('Soft rock, with less talk. On port', PORT)
})