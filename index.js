const express = require('express')
const app = express()
const PORT = 8000
// // configure for EJS
app.set('view engine', 'ejs')

// need navi links
app.get('/', (req, res)=>{
    res.send("navi links here")
})
// Traits of signs
const airTraits= ["movement","creativity", "action", 'adventure',"easily provoked"]
const waterTraits = ["private","mysterious", "pyschic","charming", "emotional", "sensitive" ]
const fireTraits = ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
const earthTraits = ["grounded", "helpful", "practical", "realistic", "materialstic", "dependable"]


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





 app.listen(PORT, ()=> {
    console.log(`you are live on channel ${8000}`)
 })