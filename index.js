const express = require('express') // import express
const app = express()              // creates instance of express
const port = 8000

// middlewares
const ejsLayout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayout)


//

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/water', (req, res) => {
  res.render('./water/index.ejs', {
    element: 'Water',
    signs: ['Pisces','Cancer','Scorpio'],
    traits: [
      'private',
      'mysterious',
      'pyshic',
      'charming',
      'emotional',
      'sensitive'
    ]
  })
})
app.get('/air', (req, res) => {
  res.render('./air/index.ejs', {
    element: 'Air',
    signs: ['Aquarius','Gemini','Libra'],
    traits: [
      'movement',
      'creativity',
      'action',
      'adventure',
      'exciting',
      'easily provoked'
    ]
  })
})
app.get('/fire', (req, res) => {
  res.render('./fire/index.ejs', {
    element: 'Fire',
    signs: ['Aries','Leo','Sagitarrius'],
    traits: [
      'passionate',
      'strong emotions',
      'temperamental',
      'energetic',
      'accomplished',
      'interesting'
    ]
  })
})
app.get('/earth', (req, res) => {
  res.render('./earth/index.ejs', {
    element: 'Earth',
    signs: ['Taurus','Virgo','Capricorn'],
    traits: [
      'grounded',
      'helpful',
      'practical',
      'realistic',
      'materialistic',
      'dependable'
    ]
  })
})

app.listen(port, err => {
  if (err) console.log(err)
  console.log(`Server listening to port ${port}🎧`)
})
