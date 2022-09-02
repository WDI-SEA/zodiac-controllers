const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const PORT = 8000
// // configure for EJS
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// need navi links
app.get('/', (req, res)=>{
    res.send("navi links here")
})
// Traits of signs
const airTraits= ["movement","creativity", "action", 'adventure',"easily provoked"]
const waterTraits = ["private","mysterious", "pyschic","charming", "emotional", "sensitive" ]
const fireTraits = ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
const earthTraits = ["grounded", "helpful", "practical", "realistic", "materialstic", "dependable"]

//Navigation Page
app.get('/', (req, res)=>{
    res.render('layout')
})
// water
app.get('/water', (req, res) => {
    // res.render('water')
    res.render('water', {traits:waterTraits})
})
// air
app.get('/air', (req,res)=>{
    res.render('air', {traits:airTraits})
})
//fire
app.get('/fire', (req, res)=>{
    res.render('fire', {traits:fireTraits})
})
//earth
app.get('/earth', (req, res)=>{
    res.render('fire', {traits:fireTraits})
})




// LISTENER ALWAYS GOES AT THE BOTTOM
 app.listen(PORT, ()=> {
    console.log(`you are live on channel ${8000}`)
 })