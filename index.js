
const express=require('express')
const app=express()
const layouts=require('express-ejs-layouts')
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
app.use(layouts)
app.use('/water',require('./controller/water.js'))
app.use('/air',require('./controller/air.js'))
app.listen(3000,()=>{console.log("I am here")})
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/water',(req,res)=>{
    let waterSigns=["PISCRS","CANCER","SCORPIO"]
    let waterTraits=["private","mystemous","pyschic","charming","emotional"]
    res.render('elementDisplay',{signs:waterSigns,traits:waterTraits})
})
app.get('/air',(req,res)=>{
    let airSigns=["ARIES","LEO","SAGITTARIUS"]
    let airTraits=["pessionate","strong emotions","temperamental","temperamental","energetic"]
    res.render('elementDisplay',{signs:airSigns,traits:airTraits})
})
app.get('/fire',(req,res)=>{

   let fireSigns=["PISCRS","CANCER","SCORPIO"]
    let fireTraits=["private","mystemous","pyschic","charming","emotional"]
    res.render('elementDisplay',{signs:fireSigns,traits:fireTraits})
})
app.get('/earth',(req,res)=>{
    let airSigns=["TAURUS","VIRGO","CAPRICORN"]
    let airTraits=["grounded","helpful","practical","realistic","matenalstic","dependable"]
    res.render('elementDisplay',{signs:airSigns,traits:airTraits})
})