const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/air', require('./controllers/air.js'))
app.use('/water', require('./controllers/water.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/earth', require('./controllers/earth.js'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/air', (req, res) => {
    res.render('air.ejs')
})

app.get('/water', (req, res) => {
    res.render('water.ejs')
})

app.get('/fire', (req, res) => {
    res.render('fire.ejs')
})

app.get('/earth', (req, res) => {
    res.render('earth.ejs')
})
// Part 1-Lab
// app.get('/water', (req, res) => {
//     const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
//     const waterTraits = ['Private', 'Mysterious', 'Pyshic', 'Charming', 'Emotional', 'Sensitive']
//     res.render('water.ejs', {waterSigns, waterTraits})
// })

// app.get('/air', (req, res) => {
//     const airSigns = ['Aquarius', 'Gemini', 'Libra']
//     const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
//     res.render('air.ejs', {airSigns, airTraits})
// })

// app.get('/fire', (req, res) => {
//     const fireSigns = ['Aries', 'Leo', 'Sagittarius']
//     const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Enegertic', 'Accomplished', 'Interesting']
//     res.render('fire.ejs', {fireSigns, fireTraits})
// })

// app.get('/earth', (req, res) => {
//     const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
//     const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
//     res.render('earth.ejs', {earthSigns, earthTraits})
// })


app.listen(8000, ()=> {
    console.log('just cheking')
})