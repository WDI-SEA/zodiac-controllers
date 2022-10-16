const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//Middlerware:
app.set('view engine', 'ejs')
app.use(ejsLayouts);
//Constrollers Middlerware:
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))

const PORT = 3000

// Routs
app.get('/', (req,res)=>{
    // res.send("Hello This is the Home page") //For Testing
    res.render('index.ejs')
})


app.listen(PORT, ()=>console.log("I'm Listening.."))