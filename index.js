const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE

app.set('view engine', 'ejs')
app.use(ejsLayouts)

// HOME route
app.get('/', (req, res)=>{
    res.render('index.ejs')
})

// EARTH route
app.get('/earth', (req, res)=>{
    res.render('earth.ejs', {earth: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']})
    // res.send('Hello Earth Nation')
})

// FIRE route
app.get('/fire', (req, res)=>{
    res.render('fire.ejs', {fire: ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']})
    // res.send('Hello Fire Nation')
})

// WATER route
app.get('/water', (req, res)=>{
    res.render('water.ejs', {water: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']})
    // res.send('Hello Water Nation')
})

// AIR route
app.get('/air', (req, res)=>{
    res.render('air.ejs', {air: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']})
    // res.send('Hello Air Nation')
})

app.listen(8000, ()=>{
    console.log('The Last Airbender')
})
