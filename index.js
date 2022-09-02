const express = require('express')

const app = express()
const PORT = 8080
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', (req, res) => {
    // res.send('IM WORKING HEREEEE!')
    res.render('index')
})

app.get('/water', (req, res) => {
    // res.send('WATER SIGNS')
    res.render('water', {trait: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']})
})

app.get('/air', (req, res) => {
    // res.send('AIR SIGNS')
    res.render('air', {trait: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})

app.get('/fire', (req, res) => {
    // res.send('FIRE SIGNS')
    res.render('fire', {trait: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})

app.get('/earth', (req, res) => {
    // res.send('EARTH SIGNS')
    res.render('earth', {trait: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})

app.listen(PORT, () => {
    console.log(`port ${PORT}... 🤪`)
})
