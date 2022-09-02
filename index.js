const express = require('express')
const app = express()
const PORT = 8000
// // configure for EJS
app.set('view engine', 'ejs')

// need navi links
app.get('/', (req, res)=>{
    res.send("navi links here")
})
// water
app.get('/water', (req, res) => {
    res.send("water")
})
// air
app.get('/air', (req,res)=>{
    res.send("air")
})
//fire
app.get('/fire', (req, res)=>{
    res.send("fire")
})
//earth
app.get('/earth', (req, res)=>{
    res.send("earth")
})





 app.listen(PORT, ()=> {
    console.log(`you are live on channel ${8000}`)
 })