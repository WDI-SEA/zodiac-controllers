const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const PORT = 3000

// CONFIGURE APP TO USE EJS
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    console.log(`This is the index page!`)
    res.render('index')
})

const waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
app.get('/water', (req, res) => {
    console.log(`This is the water page!`)
    res.render('water', {traits: waterTraits})
})

const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily provoked']
app.get('/air', (req, res) => {
    console.log(`This is the air page!`)
    res.render('air', {traits: airTraits})
})

const fireTraits = ['Passionate', 'Strong emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
app.get('/fire', (req, res) => {
    console.log(`This is the fire page!`)
    res.render('fire', {traits: fireTraits})
})

const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
app.get('/earth', (req, res) => {
    console.log(`This is the earth page!`)
    res.render('earth', {traits: earthTraits})
})

const elements = {
    air: {
        name: "air",
        signs: ["aquarius", "geminin", "libra"],
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    water: {
        name: "water",
        signs: ["pisces", "cancer", "scorpio"],
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    },
    fire: {
        name: "fire",
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accompli,sed", "interesting"]
    },
    earth: {
        name: "earth",
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}

// LISTENER AT THE BOTTOM
app.listen(PORT, () => {
    console.log(`You're tuned into port ${PORT}`)
})

