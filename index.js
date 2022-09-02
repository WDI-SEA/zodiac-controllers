const express = require('express')
const app = express()

const PORT = 3000

// CONFIGURE APP TO USE EJS
// app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send(`This is the home page!`)
})

app.get('/water', (req, res) => {
    res.send(`This is the water page!`)
})

app.get('/air', (req, res) => {
    res.send(`This is the air page!`)
})

app.get('/fire', (req, res) => {
    res.send(`This is the fire page!`)
})

app.get('/earth', (req, res) => {
    res.send(`This is the earth page!`)
})



// LISTENER AT THE BOTTOM
app.listen(PORT, () => {
    console.log(`You're tuned into port ${PORT}`)
})

