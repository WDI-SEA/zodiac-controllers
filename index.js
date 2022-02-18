const express = require('express') // import express
const app = express()              // creates instance of express
const port = 8000

// middlewares
const ejsLayout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayout)
app.use(express.static('public'))

app.use('/', require('./controllers/air'))
app.use('/', require('./controllers/earth'))
app.use('/', require('./controllers/fire'))
app.use('/', require('./controllers/water'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})



app.listen(port, err => {
  if (err) console.log(err)
  console.log(`Server listening to port ${port}🎧`)
})
