const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middleware
app.set('view engine', 'ejs') //ejs
app.use(ejsLayouts) //layouts
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))


app.get('/', (req,res)=>{
    res.render('home.ejs')
})


app.listen (8000, ()=>{
    console.log('do you know the muffin man?')
})