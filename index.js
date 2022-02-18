const express = require ('express')
const res = require('express/lib/response')
const app = express()
// import ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
// tell express to use ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// HOME
app.get('/', (req,res) =>{
    res.render('index.ejs')
    // res.send('Hello!')
})

app.get('/fire', (req,res) =>{
    res.render('fire.ejs', {trait: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
    // res.send('Hello!')
})
app.get('/earth', (req,res) =>{
    res.render('earth.ejs', {trait: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
    // res.send('Hello!')
})
app.get('/air', (req,res) =>{
    res.render('air.ejs', {trait: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
    // res.send('Hello!')
})
app.get('/water', (req,res) =>{
    res.render('water.ejs', {trait: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']})
    // res.send('Hello!')
})

app.listen(8000, ()=>{
    console.log('project is ready yo')
})