const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// const waterTraits = ['PISCES', 'CANCER', 'SCORPIO', 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive'];
// const airTraits = ['AQUARIUS', 'GEMINI', 'LIBRA', 'movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked'];
// const fireTraits = ['ARIES', 'LEO', 'SAGITTARIUS', 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting'];
// const earthTraits = ['TAURUS', 'VIRGO', 'CAPRICORN', 'grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable'];

const elements = {
    water: {
        name: "WATER",
        signs: ['PISCES', 'CANCER', 'SCORPIO'],
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    },
    air: {
        name: "AIR",
        signs: ['AQUARIUS', 'GEMINI', 'LIBRA'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },
    fire: {
        name: "FIRE",
        signs: ['ARIES', 'LEO', 'SAGITTARIUS'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    },
    earth: {
        name: "EARTH",
        signs: ['TAURUS', 'VIRGO', 'CAPRICORN'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    }
}


app.get('/', (req, res) => {
    // res.send('This is the Home Page')
    res.render('index')
})


app.get('/water', (req, res) => {
    // res.send('This is the water page')

    // For the array version
    // res.render('water', {wTraits: waterTraits})

    // DATA CHECK
    // res.json(elements.water)

    res.render('show', {element: elements.water})
})

app.get('/air', (req, res) => {
    // res.send('This is the air page')

    // For the array version
    // res.render('air', {aTraits: airTraits})

    // DATA CHECK
    // res.json(elements.air)

    res.render('show', {element: elements.air})
})

app.get('/fire', (req, res) => {
    // res.send('This is the fire page')

    // For the array version
    // res.render('fire', {fTraits: fireTraits})

    res.render('show', {element: elements.fire})
})

app.get('/earth', (req, res) => {
    // res.send('This is the earth page')

    // For the array version
    // res.render('earth', {eTraits: earthTraits})

    res.render('show', {element: elements.earth})
})

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})