const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
app.use(express.static('Public'))
app.use(ejsLayouts)

app.get('/', function(req, res) {
    res.render('index.ejs')
})

app.get('/water', function(req, res) {
    const waterTraitsArr = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {signW1: 'Pisces', signW2: 'Cancer', signW3: 'Scorpio', waterTraitsArr})
})

app.get('/air', function(req, res) {
    const airTraitsArr = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {signA1: 'Aquarius', signA2: 'Gemini', signA3: 'Libra', airTraitsArr})
})

app.get('/fire', function(req, res) {
    const fireTraitsArr = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting provoked']
    res.render('fire.ejs', {signF1: 'Aries', signF2: 'Leo', signF3: 'Sagittarius', fireTraitsArr})
})

app.get('/earth', function(req, res) {
    const earthTraitsArr = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {signE1: 'Taurus', signE2: 'Virgo', signE3: 'Capricorn', earthTraitsArr})
})













app.listen(PORT, () => {
    console.log(`ur in port ${PORT}`)
})