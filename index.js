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

app.get('/fire', (req,res) => {
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate','strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']        
    })
})

app.get('/water', (req,res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'], 
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']       
    })
})

app.get('/earth', (req,res) => {
    res.render('earth.ejs', {
        signs: ['Taurus', 'Cancer', 'Scorpio'],
        traits: ['grounded', 'helpful', 'practical','realistic', 'materialistic', 'dependable']        
    })
})

app.get('/air', (req,res) => {
    res.render('air.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'], 
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']        
    })
})

//---CONTROLLERS----
// app.use('/water-signs', require('./controllers/water-signs'))
// app.use('/')
// app.use('/')
// app.use('/')

//---PORT----
app.listen(PORT, () => {
    console.log(`You are listening on PORT ${PORT}`)
})
