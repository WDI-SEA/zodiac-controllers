// set up npms
const express = require('express')
const app = express()
const PORT = 2002
const ejsLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')

app.use(ejsLayouts)


// 4 routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/water', (req, res)=>{
    const waters = ['PISCES', 'CANCER', 'SCORPIO']
    res.render('water.ejs', {waters})
})
app.get('/air', (req, res)=>{
    const airs = ['AQUARIUS', 'GEMINI', 'LIBRA']
    res.render('air.ejs', {airs})
})
app.get('/fire', (req, res)=>{
    const fires = ['ARIES', 'LEO', 'SAGITTARIUS']
    res.render('fire.ejs', {fires})
})
app.get('/earth', (req, res)=>{
    const earths = ['TAURUS', 'VIRGO', 'CAPRICORN']
    res.render('earth.ejs', {earths})
})
app.get('/img', (req, res) => {
    res.sendFile('/Users/wonjunejung/GA/sei/unit2/zodiac-controllers/zodiac.jpeg')
}) 
app.listen(PORT, () => {
    console.log(PORT, 'linked')
})
