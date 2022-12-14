//---REQUIRED PACKAGES---
const express = require('express')

//---APP CONFIG----
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

//---MIDDLEWARES---
app.use(express.static('public'))

//---ROUTES----
app.get('/', (req,res) => {
    res.render('index.ejs')
})


// app.get('/water', (req,res) => {
//     res.render('water.ejs', {
//         signs: ['Pisces', 'Cancer', 'Scorpio'], 
//         traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']       
//     })
// })

// app.get('/fire', (req,res) => {
//     res.render('fire.ejs', {
//         signs: ['Aries', 'Leo', 'Sagittarius'],
//         traits: ['passionate','strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']        
//     })
// })

// app.get('/earth', (req,res) => {
//     res.render('earth.ejs', {
//         signs: ['Taurus', 'Virgo', 'Capicorn'],
//         traits: ['grounded', 'helpful', 'practical','realistic', 'materialistic', 'dependable']        
//     })
// })

// app.get('/air', (req,res) => {
//     res.render('air.ejs', {
//         signs: ['Aquarius', 'Gemini', 'Libra'], 
//         traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']        
//     })
// })

//---CONTROLLERS----
app.use('/water', require('./controllers/water'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))

//---PORT----
app.listen(PORT, () => {
    console.log(`You are listening on PORT ${PORT}`)
})
