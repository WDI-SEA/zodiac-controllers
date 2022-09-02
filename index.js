const express = require('express')
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

app.listen(PORT, ()=> {
    console.log(`intruder in sector ${PORT}`)
})

const fireSigns = ["Aries", "Leo", "Sagittarius"]
const fireThings = ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
const waterSigns = ["Pisces", "Cancer", "Scorpio"]
const waterThings = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
const airSigns = ["Aquarius", "Gemini", "Libra"]
const airThings = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
const earthSigns = ["Taurus", "Virgo", "Capricorn"]
const earthThings = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/water', (req, res) => {
    res.render('water', {waterThings, waterSigns})
}) 
app.get('/air', (req, res) => {
    res.render('air', {airThings, airSigns})
}) 
app.get('/fire', (req, res) => {
    res.render('fire', {fireThings, fireSigns})
}) 
app.get('/earth', (req, res) => {
    res.render('earth', {earthThings, earthSigns})
}) 
