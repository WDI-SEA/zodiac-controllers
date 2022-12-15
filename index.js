const express = require('express')

//app config
const app = express()
const PORT = 4200
app.listen(PORT, function(){
    console.log("server is running on port")
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

//Controllers

app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))
// app.use('/common url prefix', require('./path to controller file))
// ROUTES
//GET SIGNS
app.get('/water', (req, res) => {
    res.render('water.ejs', {
        water: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive'],
        signs: ['pisces', 'cancer', 'scorpio']
    })
})

app.get('/air', (req, res) => {
    res.render('air.ejs', {
        air: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked'],
        signs: ['aquarius', 'gemini', 'libra']
    })
})

app.get('/fire', (req, res) => {
    res.render('fire.ejs', {
        fire: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting'],
        signs: ['aries', 'leo', 'sagitarius']
    })
})

app.get('/earth', (req, res) => {
    res.render('earth.ejs', {
        earth: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable'],
        signs: ['taurus', 'virgo', 'capricorn'], 
       
    })
})



