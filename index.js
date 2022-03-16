const express = require('express')
const res = require('express/lib/response')
const app = express()
// import ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
// tell express to use ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/air', require("./controllers/air.js"))
app.use('/water', require("./controllers/water.js"))
app.use('/fire', require("./controllers/fire.js"))
app.use('/earth', require("./controllers/earth.js"))

// HOME
app.get('/', (req,res) =>{
    res.render('index.ejs')
    // res.send('Hello!')
})

app.get('/fire', (req,res) =>{
    res.render('fire.ejs', {trait: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']}, {signs: ['Sagittarius', 'leo', 'aries']})
    // res.send('Hello!')
})
app.get('/earth', (req,res) =>{
    res.render('earth.ejs', {trait: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']}, {signs: ['Taurus', 'virgo', 'capricorn']})
    // res.send('Hello!')
})
app.get('/air', (req,res) =>{
    res.render('air.ejs', {trait: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']}, {signs: ['libra', 'aquarius', 'gemini']})
    // res.send('Hello!')
})
app.get('/water', (req,res) =>{
    res.render('water.ejs', {trait: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']}, {signs: ['pisces', 'scorpio', 'cancer']})
    // res.send('Hello!')
})




app.listen(8000, ()=>{
    console.log('project is ready yo')
})