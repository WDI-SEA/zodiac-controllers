// IMPORT required packages
const express = require('express')

// CREATE instance of express app
const app = express();
const PORT = 8000
// DEFINE express routes
app.get('/', (req, res) => {
    res.render(`layout.ejs`)
})
app.get('/water', (req, res) => {
    res.render(`water.ejs`)
})
app.get('/air', (req, res) => {
    res.render(`air.ejs`)
})
app.get('/fire', (req, res) => {
    res.render(`fire.ejs`)
})
app.get('/earth', (req, res) => {
    res.render(`earth.ejs`)
})

// tell express to LISTEN
app.listen(PORT, () =>{
    console.log(`The stars are aligned in your favor... on port ${PORT}`)
})