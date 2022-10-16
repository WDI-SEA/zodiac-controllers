const {application} = require("express")
const express = require("express")
const app = express()
const PORT = 4000

app.set('view engine', 'ejs')


app.listen(PORT, ()=> {
    console.log("hello from the otherside")
})


 app.get("/", (req, res) => {
    res.render('index.ejs') 
 })

app.get("/air",(req, res) => {
    res.render('air.ejs', { airTypes: ['Aquaris', 'Gemini', 'Libra'],
        airSigns: ['movement', 'creativity', 'action', 'adevnture', 'exiciting', 'easily provoked']})
})

app.get("/water",(req, res) => {
    res.render('water.ejs', { waterTypes: ['Pisces', 'Cancer', 'Scorpio']},
        {waterSigns: ['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']})
})

app.get("/fire",(req, res) => {
    res.render('fire.ejs', {fireTypes: ['Aries', 'Leo', 'Sagittarius']},
        {fireSigns: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})

app.get("/earth",(req, res) => {
    res.render('earth.ejs', {earthTypes: ['Taurus', 'Virgo', 'Capricon']},
        {earthSigns: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})