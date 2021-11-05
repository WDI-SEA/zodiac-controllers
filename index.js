const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.use(ejsLayouts)
app.set('view engine', 'ejs')

// app.use('/fire', require('./controller/fire.js'))

app.get('/fire', (req, res) =>{
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireSigns: fireSigns, fireTraits: fireTraits} )
})

app.get('/air', (req, res) =>{
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns: airSigns, airTraits: airTraits})
})


app.get('/water', (req, res) =>{
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const waterTraits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterSigns: waterSigns, waterTraits: waterTraits})
    })

app.get('/earth', (req, res) =>{
    const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    const earthTraits = ['grounded', 'helpful', 'practice', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns: earthSigns, earthTraits: earthTraits})
    })   

app.use('/air', require('./controller/air.js') )
app.use('/fire', require('./controller/fire.js'))
app.use('/water', require('./controller/water.js'))
app.use('/earth', require('./controller/earth.js'))




app.get('/', (req, res) =>{
    res.render('home.ejs')

})



app.listen(3000, () =>{
    console.log('Zodiac controller')
})