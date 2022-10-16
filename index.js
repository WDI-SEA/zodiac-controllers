const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) =>{
    res.render('home.ejs')
})

app.get('/Water', (req, res)=>{
    const type1 = ['cancer', 'scorpio', 'pisces']
    res.render('Water.ejs', {Water: type1})
})

app.get('/Water/cancer', (req, res)=>{
    res.render('Cancer.ejs', )
})

app.get

app.get('/Air', (req, res)=>{
    const type2 = ['gemini', 'libra', 'aquarius']
    res.render('Air.ejs', {Air: type2})
})

app.get('/Fire', (req, res)=>{
    const type3 = ['leo', 'aries', 'sagittarius']
    res.render('Fire.ejs', {Fire: type3})
})

app.get('/Earth', (req, res)=>{
    const type4 = ['taurus', 'virgo', 'capricorn']
    res.render('Earth.ejs', {Earth: type4})
})

app.listen(PORT, ()=>{
    console.log("Let's learn about the signs!")
})