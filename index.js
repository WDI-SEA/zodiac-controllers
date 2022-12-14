// require packages
const express = require('express')

// app config
const app = express()
const PORT = 3333
app.set('view engine', 'ejs')

// Routes
app.get('/', (req, res) => {
    res.render('layout.ejs')
})
app.use('/water', require('./controllers/water.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/earth', require('./controllers/earth.js'))

// Listener
app.listen(PORT, () => {
    console.log(`listening ${PORT}`)
})