// import reqd packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// configuire the express app
const app = express()
const PORT = 3000

// tell express to use ejs to render html from templates
app.set('view engine', 'ejs')

// middlewares
app.use(ejsLayouts)
app.use(express.static("public"));

// home route
app.get('/', (req, res)=>{
    // res.send('this is the home page')
    res.render('index.ejs')
    
})

// water route
app.get('/water.ejs', (req, res)=>{
    // res.send('this is the water page')
    const water = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {water})
})

// air route
app.get('/air.ejs', (req, res)=>{
    // res.send('this is the air page')
    const air = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {air})
})

// fire route
app.get('/fire.ejs', (req, res)=>{
    // res.send('this is the fire page')
    const fire = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fire})
})

// earth route
app.get('/earth.ejs', (req, res)=>{
    // res.send('this is the earth page')
    const earth = ['grounded', 'helpful', 'practical', 'materialistic', 'dependable', 'realistic']
    res.render('earth.ejs', {earth})
})





// listen on a port -- always last
app.listen(PORT, ()=>{
    // verify that things are working when server starts
    console.log(`youre on port ${PORT}`)
})