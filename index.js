const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)

app.set('view engine', 'ejs')

app.use('/air', require('./controllers/air.js'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/water', (req, res) => {
    const waterSigns = ['pisces', 'cancer', 'scorpio']
    const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water', {waterSigns, waterTraits})
})

app.get('/fire', (req, res) => {
    const fireSigns = ['aries', 'leo', 'sagittarius']
    const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire', {fireSigns, fireTraits})
})

app.get('/earth', (req, res) => {
    const earthSigns = ['taurus', 'virgo', 'capricorn']
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth', {earthSigns, earthTraits})
})

app.listen(8000, () => {
    console.log('now listening on 8000......')
})