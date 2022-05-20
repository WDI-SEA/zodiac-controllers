// set up npms
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// app config
const app = express()
app.set('view engine', 'ejs')
const PORT = 2002

// middlewares
app.use(ejsLayouts)


// 4 routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/water', (req, res)=>{
    res.render('water.ejs', {
        element: 'Water',
        signs: ['PISCES', 'CANCER', 'SCORPIO'],
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emo']
    })
})
app.get('/air', (req, res)=>{
    res.render('air.ejs', {
        element: 'Air',
        signs: ['AQUARIUS', 'GEMINI', 'LIBRA'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})
app.get('/fire', (req, res)=>{
    res.render('fire.ejs', {
        element: 'Fires',
        signs: ['ARIES', 'LEO', 'SAGITTARIUS'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})
app.get('/earth', (req, res)=>{
    const earths = ['TAURUS', 'VIRGO', 'CAPRICORN']
    res.render('earth.ejs', {
        element: 'earth',
        signs: ['TAURUS', 'VIRGO', 'CAPRICORN'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})
app.get('/img', (req, res) => {
    res.sendFile('/Users/wonjunejung/GA/sei/unit2/zodiac-controllers/zodiac.jpeg')
}) 

// listening on a port
app.listen(PORT, () => {
    console.log(PORT, 'linked')
})
