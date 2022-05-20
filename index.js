const express = require("express")
const ejsLayout = require("express-ejs-layouts")
const app = express()
const POST = 9000

app.set("view engine" , "ejs")

app.use(express.static("Public"))
app.use(ejsLayout)

app.get("/",function(req,res){
    // res.send("home")
    res.render("index.ejs")
})

app.get("/air",function(req,res){
    // res.send("air")
    const airTraitsArr = ["movement", "creativity" , "action" , "adventure","exciting","easily provoked"]
    res.render("air.ejs", {airTraitsArr})
})

app.get("/water",function(req,res){
    // res.send("water")
    const waterTraitsArr = ["private", "mysterious", "psychic", "charming","emotional", "sensitive"]
    res.render("water.ejs", {waterTraitsArr})
})

app.get("/fire",function(req,res){
    // res.send("fire")
    const fireTraitsArr = ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]
    res.render("fire.ejs", {fireTraitsArr})
})

app.get("/earth",function(req,res){
    // res.send("earth")
    const earthTraitsArr = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    res.render("earth.ejs", {earthTraitsArr})
})


app.listen(POST, function(){
    console.log(`ITS OVER ${9000}`)
})