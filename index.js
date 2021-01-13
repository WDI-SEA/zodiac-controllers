const express = require('express')

const app = express()

const layouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')

app.use(layouts)
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) =>{
    res.render('index')
})

app.use('/air', require('./controllers/air'))
app.use('/water', require('./controllers/water'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))

// app.get('/earth', (req, res) =>{
//     let earthSigns = ['Taurus', 'Virgo', 'Capricorn']
//     let earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materalistic', 'dependable']
//     res.render('elementDisplay', {signs: earthSigns, traits: earthTraits})
// })

// app.get('/fire', (req, res) =>{
//     let fireSigns = ['Aries', 'Leo', 'Sagittarius']
//     let fireTraits = ['passionate', 'strong emotions', 'temperanmetal', 'eneregetic', 'accomplished', 'interesting']
//     res.render('elementDisplay', {signs: fireSigns, traits: fireTraits})
// })

// app.get('/water', (req, res) =>{
//     let waterSigns = ['Pisces', 'Cancer', 'Scorpio']
//     let waterTraits = ['privite', 'mysterious', 'psyhic', 'charming', 'emotional', 'sensitive']
//     res.render('elementDisplay', {signs: waterSigns, traits: waterTraits})
// })

// app.get('/air', (req, res) =>{
//     let airSigns = ['Aquarius', 'Gemini', 'Libra']
//     let airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easly provoked']
//     res.render('elementDisplay', {signs: airSigns, traits: airTraits})
// })

app.get ('public/images/aquariusVase.jpg', (res, req) => {
    res.render('/aquariusVase.jpg')
})

app.listen(3000, () => {console.log('I am listeing.')})