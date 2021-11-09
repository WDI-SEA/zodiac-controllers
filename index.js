const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middleware
app.set('view engine', 'ejs')
// Specifies the location of the static assets folder
app.use(express.static('static'));
// Sets up body-parser for parsing form data
app.use(express.urlencoded({ extended: false }));
//more middleware
app.use(ejsLayouts)
// controller config
app.use('/water',require('./controllers/water'))
app.use('/air',require('./controllers/air'))
app.use('/fire',require('./controllers/fire'))
app.use('/earth',require('./controllers/earth'))


app.get('/', (req, res) => {
  // res.send('Home Route')
  res.render('home.ejs')
})

// app.get('/water', (req, res) => {
//   
//   res.render('earth.ejs',{arrTraits})
// })

app.listen(8000, () => {
  console.log('You\'re listening to 8000!!!!!!!')
})