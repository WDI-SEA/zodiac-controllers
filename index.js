const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middleware
app.set('view engine', 'ejs') //ejs
app.use(ejsLayouts) //layouts
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))


app.get('/', (req,res)=>{
    res.render('home.ejs')
})

app.get('/aquarius', (req,res)=>{
    res.render('airgroup/aquarius.ejs')
})
app.get('/gemini', (req,res)=>{
    res.render('airgroup/gemini.ejs')
})
app.get('/libra', (req,res)=>{
    res.render('airgroup/libra.ejs')
})
app.get('/capricorn', (req,res)=>{
    res.render('earthgroup/capricorn.ejs')
})
app.get('/taurus', (req,res)=>{
    res.render('earthgroup/taurus.ejs')
})
app.get('/virgo', (req,res)=>{
    res.render('earthgroup/virgo.ejs')
})
app.get('/aries', (req,res)=>{
    res.render('firegroup/aries.ejs')
})
app.get('/leo', (req,res)=>{
    res.render('firegroup/leo.ejs')
})
app.get('/sagittarius', (req,res)=>{
    res.render('firegroup/sagittarius.ejs')
})
app.get('/cancer', (req,res)=>{
    res.render('watergroup/cancer.ejs')
})
app.get('/pisces', (req,res)=>{
    res.render('watergroup/pisces.ejs')
})
app.get('/scorpio', (req,res)=>{
    res.render('watergroup/scorpio.ejs')
})

app.listen (8000, ()=>{
    console.log('do you know the muffin man?')
})