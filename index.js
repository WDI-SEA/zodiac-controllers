// required packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// set up express app
const app = express()
const PORT = 4003

app.set('view engine', 'ejs')

// middlewares
app.use(express.static('Public'))
app.use(ejsLayouts)

/*********
**ROUTES**
*********/
//get home
app.get('/', (req, res) => {
    res.render('index.ejs')
})
//get water
app.get('/water', (req, res) => {
    const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs',{waterTraits})
})
// get air
app.get('/air', (req, res) => {
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked'] 
    res.render('air.ejs',{airTraits})
})
// get fire
app.get('/fire', (req, res) => {
    const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireTraits})
})
// get earth
app.get('/earth', (req, res) => {
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthTraits})
})

// listen on a port
app.listen(PORT, () => {
    console.log(`papa can you hear meee on port ${PORT}`)
})