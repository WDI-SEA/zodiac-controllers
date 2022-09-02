const express = require("express")
const app = express()

const PORT= 8000
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.send("Home Page Working")
})
app.get("/water",(req,res)=>{
    // res.send("Water Page Working")
    let trait =["private","mysterious","pyshic","charming","emotional","sensitive"]

    res.render(`${__dirname}/view/water.ejs`,{traits:trait})
})
app.get("/air",(req,res)=>{
    // res.send("Air Page Working")
    let trait =["movement","creativity","action","adventures","exciting","easily provoked😂"]
    res.render(`${__dirname}/view/air.ejs`,{traits:trait})
})
app.get("/fire",(req,res)=>{
    // res.send("Fire Page Working")
    let trait =["passionate","strong emotions","temperamental","energetic","accomplished","interesting"]
    res.render(`${__dirname}/view/fire.ejs`,{traits:trait})
})
app.get("/earth",(req,res)=>{
    // res.send("Earth Page Working")
    let trait =["grounded","helpful","practical","realistic","materialistic","dependable"]
    res.render(`${__dirname}/view/earth.ejs`,{traits:trait})
}) 


app.listen(PORT, function(){
    console.log(" The port has left the pot 👀")
})
          