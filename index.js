const express = require('express')
const app = express()

const layouts = require('express-ejs-layouts')
app.use(layouts)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/air', (req, res) => {
    let airSigns = ['aquarius', 'gemini', 'libra']
    let airTraits = ['movement', 'creativity', 'adventure']
    res.render('elementDisplay.ejs', {signs: airSigns, traits: airTraits})
})

app.get('/earth', (req, res) => {
    let earthSigns = ['taurus', 'virgo', 'capricorn']
    let earthTraits = ['grounded', 'helpful', 'practical']
    res.render('elementDisplay.ejs', {signs: earthSigns, traits: earthTraits})
})

app.get('/fire', (req, res) => {
    let fireSigns = ['aries', 'leo', 'sagittarius']
    let fireTraits = ['passionate', 'emotional', 'adventure']
    res.render('elementDisplay.ejs', {signs: fireSigns, traits: fireTraits})
})

app.get('/water', (req, res) => {
    let waterSigns = ['aquarious', 'gemini', 'libra']
    let waterTraits = ['this', 'that', 'the other']
    res.render('elementDisplay.ejs', {signs: waterSigns, traits: waterTraits})
})

app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))

app.listen(3000)