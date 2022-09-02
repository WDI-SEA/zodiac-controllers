// 1: import the required packages
const express = require('express')

// 2: create an instance of an express app (web server)
const app = express()
const PORT = 8000

// 3: define express routes
app.get('/', (req, res) => {
    res.render('layout.ejs')
})

app.get('/air', (req, res) => {
    res.render('air.ejs')
})


app.get('/water', (req, res) => {
    res.render('water.ejs')
})

app.get('/fire', (req, res) => {
    res.render('fire.ejs')
})

app.get('/earth', (req, res) => {
    res.render('earth.ejs')
})

// 4: tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    // this cb is invoked when the server gets up and running
    console.log(`express app is up and running on port ${PORT}`)
})