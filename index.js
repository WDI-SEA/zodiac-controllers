const express = require('express')

//configure express and set port
const app = express()
const PORT = 8000

//zodiac arrays
const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
const waterTraits = ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
const airSigns = ['Aquarius', 'Gemini', 'Libra']
const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
const fireSigns = ['Aries', 'Leo', 'Sagittarius']
const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
//set routes
app.get('/', (req,res) =>{
    res.render('index.ejs')
})
app.get('/water', (req,res) =>{
    res.render('water.ejs')
})

app.get('/air', (req,res) =>{
    res.render('air.ejs')
})

app.get('/fire', (req,res) =>{
    res.render('fire.ejs')
})

app.get('/earth', (req,res) =>{
    res.render('earth.ejs')
})
//set port listener

app.listen(PORT, () =>{
    console.log(`A fine glass of aged PORT ${PORT}`)
})