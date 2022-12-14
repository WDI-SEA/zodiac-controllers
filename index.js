// required packages //
const express = require('express')
//app config //
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// routes //

// HOME
app.get('/', (req,res) => {
    res.render(`index.ejs`)
})

// Water
app.get('/water', (req,res) => {
    res.send('water works!')
})

// Air
app.get('/air', (req,res) => {
    res.send('air works!')
})

// Fire
app.get('/fire', (req,res) => {
    res.send('fire works!')
})

// Earth
app.get('/earth', (req,res) => {
    res.send('earth works!')
})



// WATER
app.get('/water', (req,res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: []
    })
})


'Aquarius', 'Gemini', 'Libra'



// GET /loveit/animals -- renders view of favorite animals
app.get('/loveit/animals', (req,res) => {
    res.render('animals.ejs', {
        animals: ['cat', 'dog', 'aardvark', 'parrot', 'sloth']
    })
})


//listen on a port
app.listen(PORT, () => {
    console.log(`We're listening to port ${PORT} 🎧😎`)
})