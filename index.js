// import package
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

const app = express()
const PORT = 3333

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(ejsLayouts)

// home
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// water
app.get('/water', (req, res) => {
    const waterSigns = ['PICSES', 'CANCER', 'SCORPIO']
    const waterTraits = ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterSigns, waterTraits})
})

// air
app.get('/air', (req, res) => {
    const airSigns = ['AQUARIUS', 'GEMINI', 'LIBRA']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airSigns, airTraits})
})

// fire
app.get('/fire', (req, res) => {
    const fireSigns = ['ARIES', 'LE0', 'SAGITARIUS']
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireSigns, fireTraits})
})

// earth
app.get('/earth', (req, res) => {
    const earthSigns = ['TAURUS', 'VIRGO', 'CAPRICORN']
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthSigns, earthTraits})
})


app.listen(PORT, () => {
    console.log(`suck my port: ${PORT} peni$`)
})