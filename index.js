const express = require('express')

const app = express()
const PORT = 8080
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.get('/water', (req, res) => {
    res.render('water.ejs', {
        waters: ['Cancer', 'Scorpio', 'Pisces']
    })
})

app.get('/air', (req, res) => {
    res.render('air.ejs', {
        airs: ['Gemini', 'Libra', 'Aquarius']
    })
})

app.get('/fire', (req, res) => {
    res.render('fire.ejs', {
        fires: ['Leo', 'Aries', 'Sagittarius']
    })
})

app.get('/earth', (req, res) => {
    res.render('earth.ejs', {
        earths: ['Taurus', 'Virgo', 'Capricorn']
    })
})


app.listen(PORT , () => {
    console.log('Listening to port!', PORT)
})