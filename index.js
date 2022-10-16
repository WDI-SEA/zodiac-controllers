//import express
const express = require ('express')

//create an instance of express
const app = express()
const PORT = 3000

//MIDDLEWARE
app.set('view engine','ejs')

//HOME route
app.get("/", (req,res)=>{
    // res.send('This is the Home Page!')
    res.render('index.ejs')
})

//airroute
app.get("/air", (req,res)=>{
    // res.send('This is the air Page 🌬!')
    res.render('air.ejs',{AirTraits : ['Movement','Creativity','Action','Adventure','Exciting','Easily Provoked']})
})

//water route
app.get("/water", (req,res)=>{
    // res.send('This is the water Page 🌊!')
    res.render('water.ejs',{WaterTraits : ['Private','Mysterious','Psyshic','Charming','Emotional','Sensitive']})
})

//fire route
app.get("/fire", (req,res)=>{
    // res.send('This is the fire Page 🔥!')
    res.render('fire.ejs',{FireTraits : ['Passionate','Strong emotions','Temperamental','Energetic','Accomplished','Interesting']})
})

//earth route
app.get("/earth", (req,res)=>{
    // res.send('This is the earth Page 🌏!')
    res.render('earth.ejs',{EarthTraits : ['Grounded','Helpdul','Praetical','Realistic','Materialistic','Dependsble']})
})


//indicate a port to run the server on
app.listen(PORT,()=>{
    console.log(`Hello to the ${PORT}`)
})