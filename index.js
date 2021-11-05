const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

//middlewares
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))


app.get('/', (req, res)=>{
    res.render('index.ejs')
})

// const airSigns = ['Aquarius', 'Gemini', 'Libra']
// const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
// app.get('/air', (req, res)=>{
//     res.render('air.ejs', {airSigns, airTraits})
// })

// const earthSigns = ['Taurus', 'Virgo', 'Capricorn']
// const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
// app.get('/earth', (req, res)=>{
//     res.render('earth.ejs', {earthSigns, earthTraits})
// })

// const fireSigns = ['Aries', 'Leo', 'Safittarius']
// const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
// app.get('/fire', (req, res)=>{
//     res.render('fire.ejs', {fireSigns, fireTraits})
// })

// const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
// const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive' ]
// app.get('/water', (req, res)=>{
//     res.render('water.ejs', {waterSigns, waterTraits})
// })


app.listen(8000, ()=>{
    console.log('hello 8k')
})