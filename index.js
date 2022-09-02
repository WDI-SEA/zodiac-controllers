// IMPORT required packages
const express = require('express')

// CREATE instance of express app
const app = express();
const PORT = 8000
// DEFINE express routes
app.get('/', (req, res) => {
    res.send(`<h1>Zodiac!</h1>`)
})
app.get('/water', (req, res) => {
    res.send(`<h1>Zodiac!</h1>`)
})
app.get('/air', (req, res) => {
    res.send(`<h1>Zodiac!</h1>`)
})
app.get('/fire', (req, res) => {
    res.send(`<h1>Zodiac!</h1>`)
})
app.get('/earth', (req, res) => {
    res.send(`<h1>Zodiac!</h1>`)
})

// tell express to LISTEN
app.listen(PORT, () =>{
    console.log(`The stars are aligned in your favor... on port ${PORT}`)
})