// import express
const express = require ('express')
const expressEjsLayouts = require('express-ejs-layouts')
//create an instance of an express app
const app = express()
//assign a specific port to have the app listen to
const PORT= 3000

//MIDDLEWARE for ejs
app.set('view engine', 'ejs')


//

//import express-ejs-layouts
const ejsLayouts = require('express-ejs-layouts')
//MIDDLEWARE of express-ejs-layouts
app.use(ejsLayouts)

//MIDDLEWARE of controllers
app.use('/water', require('./controllers/water.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/fire', require('./controllers/fire.js'))

//ROUTES
//home route 
app.get('/', (req, res)=>{
    res.render('home.ejs')
})

//have the app listen to the port 
app.listen(PORT, ()=>{
    console.log("Listening... 🎧")
})