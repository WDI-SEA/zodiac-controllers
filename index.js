// * Import the Express Package
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// * Constructor of Express App
const app = express()

// Middleware does something to the response object before it comes in or goes out.

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.listen(8000, ()=>{
    console.log("We're gunna do some astrology.")
})

app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))


// app.get('/earth', (req,res)=>{
//     let earthSigns = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
//     res.render('earth.ejs', {earthSigns})
// })

// app.get('/air', (req,res)=>{
//     let airSigns = ["Movement", "Creativity", "Action", "Adventure", "Exciting", "Easily Provoked"]
//     res.render('air.ejs', {airSigns})
// })

// app.get('/fire', (req,res)=>{
//     let fireSigns = ["passionate", "strong emotions", "tempermental", "energetic", "energetic", "accomplished", "interesting"]
//     res.render('fire.ejs', {fireSigns})
// })

// app.get('/water', (req,res)=>{
//         let waterSigns = ["private", "mysterious", "psyhcic", "charming", "emotional", "sensitive"]
//     res.render('water.ejs', {waterSigns})
// })