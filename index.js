const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')

// middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// controller configuration
app.use('/air', require('./controllers/air.js'))
// controller configuration
app.use('/earth', require('./controllers/earth.js'))
// controller configuration
app.use('/fire', require('./controllers/fire.js'))
// controller configuration
app.use('/water', require('./controllers/water.js'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(8000, ()=>{
console.log('check to see if it works')
})