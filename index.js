const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log(`intruder in sector ${PORT}`)
})

const elements = {
    air: {
        name: 'Air',
        signs: ["Aquarius", "Gemini", "Libra"],
        attributes: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    },

    fire: {
        name: 'Fire',
        signs: ["Aries", "Leo", "Sagittarius"],
        attributes: ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
    },

    water: {
        name: 'Water',
        signs: ["Pisces", "Cancer", "Scorpio"],
        attributes: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    },

    earth: {
        name: 'Earth',
        signs: ["Taurus", "Virgo", "Capricorn"],
        attributes: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    }
}



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/water', (req, res) => {
    res.render('water', elements.water)
}) 
app.get('/air', (req, res) => {
    res.render('air', elements)
}) 
app.get('/fire', (req, res) => {
    res.render('fire', elements)
}) 
app.get('/earth', (req, res) => {
    res.render('earth', elements)
}) 
