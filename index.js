const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')

app.set('view engine','ejs')
app.use(ejsLayouts)

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/water',(req,res)=>{
    res.render('water.ejs', {waterSigns:['Pisces','Cancer','Scorpio'], waterTraits: ['private','mysterious','pychic','charming','emotional','sensitive']})
})

app.get('/fire',(req,res)=>{
    res.render('fire.ejs', {fireSigns:['Aries','Leo','Sagittarius'], fireTraits: ['passionate','strong emotions','temperamental','energetic','accomplished','interesting']})
})

app.get('/air',(req,res)=>{
    res.render('air.ejs', {airSigns:['Aquarius','Gemini','Libra'], airTraits: ['movement','creativity','action','adventure','exciting','easily provoked']})
})

app.get('/earth',(req,res)=>{
    res.render('earth.ejs', {earthSigns:['Taurus','Virgo','Capricorn'], earthTraits: ['grounded','helpful','practical','realistic','materialistic','dependable']})
})

app.listen(8000, ()=>{
   console.log('Server is up and running...')
})

