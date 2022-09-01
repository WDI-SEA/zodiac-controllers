const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(ejsLayouts)

// ROUTES
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/air', (req, res) => {
  res.render('air', { signs: ['AQUARIUS', 'GEMINI', 'LIBRA'], traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked'] })
})

app.get('/water', (req, res) => {
  res.render('water', { signs: ['PISCES', 'CANCER', 'SCORPIO'], traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive'] })
})

app.get('/fire', (req, res) => {
  res.render('fire', { signs: ['ARIES', 'LEO', 'SAGITTARIUS'], traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting'] })
})

app.get('/earth', (req, res) => {
  res.render('earth', { signs: ['TAURUS', 'VIRGO', 'CAPRICORN'], traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable'] })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})