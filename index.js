const express = require('express')
const app = express()
const PORT = 8000

const air = ['Aquarius', 'Gemini', 'Libra']
const water = ['Pisces', 'Cancer', 'Scorpio']
const fire = ['Aries', 'Leo', 'Sagittarius']
const earth = ['Taurus', 'Virgo', 'Capricorn']

app.get('/Home', (req,res) => {
    res.render("index.ejs")
})
app.get('/water', (req,res) => {
    res.render("water.ejs",{water:water})
})
app.get('/air', (req,res) => {
    res.render("air.ejs",{air:air})
})
app.get('/fire', (req,res) => {
    res.render("fire.ejs",{fire:fire})
})
app.get('/earth', (req,res) => {
    res.render("earth.ejs",{earth:earth})
})

app.listen(PORT, () => {
    console.log(`Express is running on ${PORT}`)
})