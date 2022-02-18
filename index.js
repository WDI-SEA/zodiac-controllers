const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

// Middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Home
app.get('/', (req,res)=> {
    res.render('index.ejs')
})

app.get('/water', (req,res)=> {
    res.render('water.ejs', {water: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']})
})

app.get('/air', (req,res)=> {
    res.render('air.ejs', {air: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})

app.get('/fire', (req,res)=> {
    res.render('fire.ejs', {fire: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})

app.get('/earth', (req,res)=> {
    res.render('earth.ejs', {earth: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})





app.listen(8000, ()=> {
    console.log("Connected")
})