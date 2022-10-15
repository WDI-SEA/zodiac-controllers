const express = require("express")
const app = express()
PORT = 8000

// const ejsLayout = require("express-ejs-layouts")
// app.use(ejsLayout)

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/water", (req, res)=>{
    res.render("water", {waterTrait: ["Private", "Charming", "Sensitive"]})
})

app.get("/air", (req, res)=>{
    res.render("air", {airTrait: ["Movement", "Action", "Adventure"]})
})

app.get("/fire", (req, res)=>{
    res.render("fire", {fireTrait: ["Passionate", "Energetic", "Enteresting"]})
})

app.get("/earth", (req, res)=>{
    res.render("earth", {earthTrait: ["Grounded", "Helpful", "Realistic"]})
})

app.listen(PORT, ()=>{
    console.log("Listening ....")
})