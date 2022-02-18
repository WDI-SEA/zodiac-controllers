const express = require('express')
const app = express()
// import ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
// tell express to use ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// HOME
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// water
app.get('/water', (req, res) => {
    res.render('water.ejs', {water: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']})
})

// air
app.get('/air', (req, res) => {
    res.render('air.ejs', {air: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})

// fire
app.get('/fire', (req, res) => {
    res.render('fire.ejs', {fire: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})

// earth
app.get('/earth', (req, res) => {
    res.render('earth.ejs', {earth: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})

app.listen(3000, () => {
    console.log('is this thing working')
})