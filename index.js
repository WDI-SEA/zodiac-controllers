const express = require('express')

const app = express()
const PORT = 8000
// const ejsLayouts = require('express-ejs-layouts');

app.set("view engine", "ejs");
// app.use(ejsLayouts);

app.get('/', (req,res) => {
    res.render("index")
})

const waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
app.get('/water', (req,res) => {
    res.render("Water", {traits: waterTraits})
})

const airTraits = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', "Easily Provoked"]
app.get('/air', (req,res) => {
    res.render("Air", {traits: airTraits})
})

const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
app.get('/fire', (req,res) => {
    res.render("Fire", {traits: fireTraits})
})

const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
app.get('/earth', (req,res) => {
    res.render("Earth", {traits: earthTraits})
})

app.listen(PORT, () => {
    console.log(`port is running ${PORT}`)
})