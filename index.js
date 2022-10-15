//import express
const express = require("express")
const PORT=3000


//create an instance of express
const app = express()

//MIDDLEWARE
app.set('view engine','ejs')


//HOME route
app.get("/", (req,res)=>{
    res.render('index.ejs')
    
})

app.get("/water", (req,res)=>{
    // res.send("This is the water sign Page!")
    res.render('water.ejs')
    
})

app.get("/air", (req,res)=>{
    // res.send("This is the air sign Page!")
    res.render('air.ejs')
    
})

app.get("/fire", (req,res)=>{
    // res.send("This is the fire sign Page!")
    res.render('fire.ejs')
    
})

app.get("/earth", (req,res)=>{
    // res.send("This is the earth sign Page!")
    res.render('earth.ejs')
    
})


//indicate a port to run the server on
app.listen(PORT, ()=>{
    console.log(`HELLO FROM PORT ${PORT}`)
})
