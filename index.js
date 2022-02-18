// import express
const express = require('express')

// create an instance of express
const app = express()

const PORT = 8000;

//import ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// set the view engine to ejs
app.set('view engine', 'ejs');

// need this to use ejs layouts
app.use(ejsLayouts)


// home route
app.get('/', (req, res)=> {
    res.render('index.ejs')
})

// water route
app.get('/water', (req, res)=> {
    res.render('water.ejs', {waterTraits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']})
})

// earth route
app.get('/earth', (req, res) => {
    res.render('earth.ejs',{earthTraits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})

// air route
app.get('/air', (req, res) => {
    res.render('air.ejs', {airTraits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})

// fire route
app.get('/fire', (req, res) => {
    res.render('fire.ejs', {fireTraits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})

app.listen(PORT, () => {
    console.log(`server is live and running on port ${PORT}`)
})