//import express
const express = require('express')
//create instance of a class
const app = express()
const ejslayouts = require('express-ejs-layouts')

//Middleware
app.set('view engine', 'ejs')
app.use(ejslayouts)
app.use('/fire', require('./controllers/fire'))
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/water', require('./controllers/water'))
//applisten
app.listen(8000, () => {
    console.log('Hello!')
})

app.get('/', (req, res) => {
    res.render('home.ejs')
})








