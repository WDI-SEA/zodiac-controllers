const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// set up express app 
const {send} = require('express/lib/response')
const app = express()
const PORT = 3333 
app.set('view engine', 'ejs')

// middleware
app.use(express.static('Public'))
app.use(ejsLayouts)

// routes 
// home 
app.get('/', (req,res) => {
    res.render('index.ejs')
})
// water
app.get('/water', (req,res) => {
    const element = 'Water'
    const signs = 'PISCES | CANCER | SCORPIO'
    const traits = [
        'private', 'mysterious', 'psychic', 
        'charming', 'emotional', 'sensitive'
    ]
    res.render('element', {element, signs, traits})
})
// air 
app.get('/air', (req, res) => {
    const element = 'Air'
    const signs = 'AQUARIUS | GEMINI | LIBRA'
    const traits = [
        'movement', 'creativity', 'action', 
        'adventure', 'exciting', 'easily provoked'
    ]
    res.render('element', {element, signs, traits})
})
// fire
app.get('/fire', (req,res) => {
    const element = 'Fire'
    const signs = 'ARIES | LEO | SAGITTARIUS'
    const traits = [
        'passionate', 'strong emotions', 'temperamental', 
        'energetic', 'accomplished', 'interesting'
    ]
    res.render('element', {element, signs, traits})
})
app.get('/earth', (req,res) => {
    const element = 'Earth'
    const signs = 'TAURUS | VIRGO | CAPRICORN'
    const traits = [
        'grounded', 'helpful', 'practical', 
        'realistic', 'materialistic', 'dependable'
    ]
    res.render('element', {element, signs, traits})
})




// Listen 
app.listen(PORT, () => {
    console.log(`We now welcome you to the lovely sound of port ${3333}`)
})


