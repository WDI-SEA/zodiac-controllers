const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts);

const PORT = 3000

// Routs
app.get('/', (req,res)=>{
    // res.send("Hello This is the Home page") //For Testing
    res.render('index.ejs')
})

app.get('/air', (req,res)=>{
    res.render('air.ejs', {airTraits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provocked']})
})

app.get('/water', (req,res)=>{
    res.render('water.ejs', {waterTraits: ['Private', 'Mysterious', 'Pychic', 'Charming', 'Emotional', 'Sensitive']})
})

app.get('/fire', (req,res)=>{
    res.render('fire.ejs', {fireTraits: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']})
})

app.get('/earth', (req,res)=>{
    res.render('earth.ejs', {earthTraits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']})
})



app.listen(PORT, ()=>console.log("I'm Listening.."))