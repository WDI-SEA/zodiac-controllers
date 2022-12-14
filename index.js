const express = require('express')
const app = express()

const PORT = 8000

///routes
app.get('/',(req,res) =>{
    res.render('layout.ejs')
  
})
app.get('/water',(req,res) =>{
    res.render('water.ejs', {
        signs: ["Pisces", "Cancer", "Scorpio"],
        traits: ["Private", "misterious", "pyschic", "Charming","Emotional","Sensitive"]
    })
  
})
app.get('/air',(req,res) =>{
    res.render('air.ejs', {
    signs: ["Aquarius", "Gemini", "Scorpio"],
    traits: ["Movement", "Creativity", "Action", "Adventure"]
    })
})
app.get('/fire',(req,res) =>{
    res.render('fire.ejs', {
    signs: ["Aries", "Leo"],
    traits: ["Passionate", "strong", "pyschic", "Charming"]
    })
})
app.get('/earth',(req,res) => {
    res.render('earth.ejs', {
    signs: ["Pisces", "Cancer", "Scorpio"],
    traits: ["Private", "misterious", "pyschic", "Charming","Emotional","Sensitive"]
    })
})

app.listen(PORT,() => {
    console.log('port is running')
    

})