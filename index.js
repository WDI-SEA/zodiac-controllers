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
    // res.send('water works!')
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })
})

// Air
app.get('/air', (req,res) => {
    // res.send('air works!')
    res.render('air.ejs', {
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})

// Fire
app.get('/fire', (req,res) => {
    // res.send('fire works!')
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})

// Earth
app.get('/earth', (req,res) => {
    // res.send('earth works!')
    res.render('earth.ejs', {
        signs: ['Taurus', 'Virgo', 'Capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})


//listen on a port
app.listen(PORT, () => {
    console.log(`We're listening to port ${PORT} 🎧😎`)
})