// set up npms
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// app config
const app = express()
app.set('view engine', 'ejs')
const PORT = 2002

// middlewares
app.use(ejsLayouts)
app.use(express.static('public'))
app.use('/water', require('./controllers/water'))
app.use('/fire', require('./controllers/fire'))
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))

// 4 routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})






// listening on a port
app.listen(PORT, () => {
    console.log(PORT, 'linked')
})
