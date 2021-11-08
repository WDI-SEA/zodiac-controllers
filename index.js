const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middleware
app.set('view engine', 'ejs')
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
//   const arrTraits = ['private','mysterious','pyshic','charming','emotional','sensitive']
//   res.render('earth.ejs',{arrTraits})
// })

app.get('/air', (req, res) => {
  const arrTraits = ['movement','creativity','action','adventure','exciting','easily provoked']
  res.render('earth.ejs',{arrTraits})
})

app.get('/fire', (req, res) => {
  const arrTraits = ['passionate','energetic','strong emotions','temperamental','accomplished','interesting']
  res.render('earth.ejs',{arrTraits})
})

app.get('/earth', (req, res) => {
  const arrTraits = ['grounded','helpful','practical','realistic','materialistic','dependable']
  res.render('earth.ejs',{arrTraits})
})

app.listen(8000, () => {
  console.log('You\'re listening to 8000!!!!!!!')
})