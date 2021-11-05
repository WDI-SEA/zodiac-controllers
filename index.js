const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)
//controller configuration
//one for each element
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))
//entry route
app.get('/', (req, res) => {
    res.render('index')
})
//listener
app.listen(8000, () => {
    console.log('Now listening on Port 8000')
})