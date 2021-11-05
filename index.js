const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')

// middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// controller configuration
app.use('/air', require('./controllers/air.js'))
// controller configuration
app.use('/earth', require('./controllers/earth.js'))
// controller configuration
app.use('/fire', require('./controllers/fire.js'))
// controller configuration
app.use('/water', require('./controllers/water.js'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/air', (req, res)=>{
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air/air.ejs', {airSigns, airTraits})
})

app.get('/earth', (req, res)=>{
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['grounded', 'helpful', 'pratical', 'realistic', 'materialistic', 'dependable']
    res.render('earth/earth.ejs', {earthSigns, earthTraits})
})

app.get('/fire', (req, res)=>{
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire/fire.ejs', {fireSigns, fireTraits})
})

app.get('/water', (req, res)=>{
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const waterTraits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water/water.ejs', {waterSigns, waterTraits})
})

app.listen(8000, ()=>{
console.log('Whats your zodiac sign ♊️?')
})