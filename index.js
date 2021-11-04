const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/air', require('./controllers/air'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/water', (req, res) => {
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const waterTraits = ['Private', 'Mysterious', 'Pyshic', 'Charming', 'Emotional', 'Sensitive']
    res.render('water.ejs', {waterSigns, waterTraits})
})

app.get('/air', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    res.render('air.ejs', {airSigns, airTraits})
})

app.get('/fire', (req, res) => {
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Enegertic', 'Accomplished', 'Interesting']
    res.render('fire.ejs', {fireSigns, fireTraits})
})

app.get('/earth', (req, res) => {
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})


app.listen(8000, ()=> {
    console.log('just cheking')
})