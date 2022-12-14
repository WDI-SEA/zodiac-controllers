const express = require('express')
const app = express ()
const PORT = 5500
app.set('view engine', 'ejs')

//CSS & Images
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs')
})
app.use('/earth', require('./controllers/earth.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/water', require('./controllers/water.js'))
app.use('/fire', require('./controllers/fire.js'))

app.get('/water', (req, res) =>{
    res.render('water.ejs', {
        waterSign: ['Pisces', 'Cancer', 'Scorpio']
    })
})

app.get('/air', (req, res) =>{
    res.render('air.ejs', {
        airSign: ['Aquarius', 'Gemini', 'Libra']
    } )
})

app.get('/fire', (req, res) =>{
    res.render('fire.ejs', {
        fireSign: ['Aries', 'Leo', 'Sagittarius']
    } )
})

app.get('/earth', (req, res) =>{
    res.render('earth.ejs', {
        earthSign: ['Taurus', 'Virgo', 'Capricorn']
    } )
})


app.listen(PORT, () => {
    console.log('Port running!')
})