// IMPORT required packages
const express = require('express')


// Element characteristics

const arrWatersigns = ['PISCES','CANCER','SCORPIO']
const arrAirsigns = ['AQUARIUS','GEMINI','LIBA']
const arrFiresigns = ['ARIES','LEO','SAGITTARIUS']
const arrEarthsigns = ['TAURUS','VIRGO','CAPRICORN']

// CREATE instance of express app
const app = express();
const PORT = 8000
// DEFINE express routes

// HOMEPAGE
app.get('/', (req, res) => {
    res.render(`layout.ejs`)
})

// WATER PAGE
app.get('/water', (req, res) => {
    res.render(`water.ejs`)
})

// AIR PAGE
app.get('/air', (req, res) => {
    res.render(`air.ejs`)
})

// FIRE PAGE
app.get('/fire', (req, res) => {
    res.render(`fire.ejs`)
})

// EARTH PAGE
app.get('/earth', (req, res) => {
    res.render(`earth.ejs`)
})

// tell express to LISTEN
app.listen(PORT, () =>{
    console.log(`The stars are aligned in your favor... on port ${PORT}`)
})