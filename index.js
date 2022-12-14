// requried packages
const express = require('express')

// app config
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// CONTROLLERS
app.get('/water', (req, res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Scorpio', 'Cancer']
    })
})

app.get('/air', (req, res) => {
    res.render('air.ejs', {
        signs: ['Aquarius', 'Gemini', 'Libra']
    })
})

app.get('/fire', (req, res) => {
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius']
    })
})

app.get('/earth', (req, res) => {
    res.render('earth.ejs', {
        signs: ['Taurus', 'Virgo', 'Capricorn']
    })
})

app.listen(PORT, () => {
    console.log(`I love you ${PORT}`)
})