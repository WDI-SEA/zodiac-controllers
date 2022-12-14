// required packages
const express = require('express')

// app config
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// Controllers
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))
app.use('/earth', require('./controllers/earth'))

// listen on a port
app.listen(8000)
