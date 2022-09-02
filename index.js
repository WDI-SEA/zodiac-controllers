const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')

const waterTraits = ['PISCES', 'CANCER', 'SCORPIO', 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive'];
const airTraits = ['AQUARIUS', 'GEMINI', 'LIBRA', 'movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked'];
const fireTraits = ['ARIES', 'LEO', 'SAGITTARIUS', 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting'];
const earthTraits = ['TAURUS', 'VIRGO', 'CAPRICORN', 'grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable'];

app.get('/', (req, res) => {
    // res.send('This is the Home Page')
    res.render('index')
})

app.get('/water', (req, res) => {
    // res.send('This is the water page')
    res.render('water', {wTraits: waterTraits})
})

app.get('/air', (req, res) => {
    // res.send('This is the air page')
    res.render('air', {aTraits: airTraits})
})

app.get('/fire', (req, res) => {
    // res.send('This is the fire page')
    res.render('fire', {fTraits: fireTraits})
})

app.get('/earth', (req, res) => {
    // res.send('This is the earth page')
    res.render('earth', {eTraits: earthTraits})
})

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})