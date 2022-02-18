const express = require ('express')
const res = require('express/lib/response')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middleware
//tell express to use ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//HOME
app.get('/', (req,res)=>{
  res.render('index.ejs')
})

//air
app.get('/air', (req, res)=>{
  const airTraits = [
    "movement",
    "creativity",
    "action",
    "adventure",
    "exciting",
    "easily provoked",
  ];
  // res.send('airjordan')
  res.render('air.ejs', {air: airTraits})
})

//water
app.get('/water',(req, res)=>{
  // res.send('watersoaker')
  const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
  res.render('water.ejs', {water: waterTraits})
})
//fire
app.get('/fire', (req, res)=>{
  // res.send('firedrill')
  const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
  res.render('fire.ejs', {fire: fireTraits})

})
//earth
app.get('/earth',(req, res)=>{
  // res.send('earthwormjim')
  const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
  res.render('earth.ejs', {earth: earthTraits})
})
//water



app.listen(8000,()=>{
  console.log('T.T')
})