const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()

const PORT = 3333
//creat app
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static( "public"))
app.get('/', function(req,res){
    res.render('index.ejs')
})
app.get('/water', function(req,res){
    const waterSigns = ['Cancer', 'Scorpio', 'Pisces']
    const waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional']
    res.render('water.ejs', {waterSigns, waterTraits})
})
app.get('/air', function(req,res){
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['Movement', 'Creativity', 'Action', 'Lucky', 'Adventure', 'Easily Provoked']
    res.render('air.ejs', {airSigns, airTraits})
})
app.get('/fire', function(req,res){
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Lucky', 'Accomplished', 'Interesting']
    res.render('fire.ejs', {fireSigns, fireTraits})
})
app.get('/earth', function(req,res){
    const earthSigns = ['Taurus', 'Virgo', 'Capicorn']
    const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Dependable', 'Materialistic']
    res.render('earth.ejs', {earthSigns, earthTraits})
})

// listen to port
app.listen(PORT, function(){
    console.log('listen')
})
