const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/air', require('./controllers/air'));
app.use('/earth', require('./controllers/earth'));
app.use('/fire', require('./controllers/fire'));
app.use('/water', require('./controllers/water'));


app.get('/', (req, res) => {
    res.render('home.ejs')
    console.log('rendering')
})
//air signs
app.get('/air', (req, res) => {
    const air = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', { air })
})

//water signs
app.get('/water', (req, res) => {
    const water = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', { water })
})


//fire signs
app.get('/fire', (req, res) => {
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', { fire })
})

//earth signs
app.get('/earth', (req, res) => {
    const earth = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', { earth })
})


app.listen(8000, () => {
    console.log('working port')
})