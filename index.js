const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
//configure express and set port
const app = express()
const PORT = 8000

//zodiac arrays
const elements = {
    air: {
        name: 'air',
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },
    water: {
        name: 'water',
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
    },
    fire: {
        name: 'fire',
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    },
    earth: {
        name: 'earth',
        signs: ['Taurus', 'Virgo', 'Capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    }    
}
// const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
// const waterTraits = ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
// const airSigns = ['Aquarius', 'Gemini', 'Libra']
// const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
// const fireSigns = ['Aries', 'Leo', 'Sagittarius']
// const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
// const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
// const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
//configure app to run EJS and layouts
app.set('view engine', 'ejs')
// app.use(ejsLayouts)

//set routes
app.get('/', (req,res) =>{
    res.render('home')
})
app.get('/water', (req,res) =>{
    // res.render('show', {signs: airSigns, traits: airTraits})
    res.render ('show', {element: elements.water})
})

app.get('/air', (req,res) =>{
    // res.render('air.ejs', {signs: airSigns, traits: airTraits})
    res.render ('show', {element: elements.air})
})

app.get('/fire', (req,res) =>{
    // res.render('fire.ejs', {signs: fireSigns, traits: fireTraits})
    res.render ('show', {element: elements.fire})
})

app.get('/earth', (req,res) =>{
    // res.render('earth.ejs', {signs: earthSigns, traits: earthTraits})
    res.render ('show', {element: elements.earth})
})
//set port listener

app.listen(PORT, () =>{
    console.log(`A fine glass of aged PORT ${PORT}`)
})