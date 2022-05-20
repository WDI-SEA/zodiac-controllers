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
    const waterTraits = ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterTraits})
})

// air
app.get('/air', (req, res) => {
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airTraits})
})

// fire
app.get('/fire', (req, res) => {
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireTraits})
})

// earth
app.get('/earth', (req, res) => {
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthTraits})
})


app.listen(PORT, () => {
    console.log(`suck my port: ${PORT} peni$`)
})