const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const PORT = 3000

// CONFIGURE APP TO USE EJS
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    // res.send(`This is the home page!`)
    console.log(`This is the index page!`)
    res.render('index')
})

app.get('/water', (req, res) => {
    // res.send(`This is the water page!`)
    console.log(`This is the water page!`)
    res.render('water')
})

app.get('/air', (req, res) => {
    // res.send(`This is the air page!`)
    console.log(`This is the air page!`)
    res.render('air')
})

app.get('/fire', (req, res) => {
    // res.send(`This is the fire page!`)
    console.log(`This is the fire page!`)
    res.render('fire')
})

app.get('/earth', (req, res) => {
    // res.send(`This is the earth page!`)
    console.log(`This is the earth page!`)
    res.render('earth')
})



// LISTENER AT THE BOTTOM
app.listen(PORT, () => {
    console.log(`You're tuned into port ${PORT}`)
})

