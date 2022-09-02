// require packages
const express = require('express')

// set up express app
const app = express()
const PORT = 8000

// configure app to use ejs
app.set('view engine', 'ejs')

// ROUTES
app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/water', (req, res) => {
    res.send('water')
})

app.get('/air', (req, res) => {
    res.send('air')
})

app.get('/fire', (req, res) => {
    res.send('fire')
})

app.get('/earth', (req, res) => {
    res.send('earth')
})

// PORT LISTENER
app.listen(PORT, () => {
    console.log('port', PORT)
})