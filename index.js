const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// set up express app 
const {send} = require('express/lib/response')
const app = express()

const PORT = 3333 


app.set('view engine', 'ejs')

// middleware
app.use(express.static('Public'))
app.use(ejsLayouts)

// routes 
// home 
app.get('/', (req,res) => {
    res.render('index.ejs')
})
// water
app.get('/water', (req,res) => {
    const traits = [
        'private', 'mysterious', 'psychic', 
        'charming', 'emotional', 'sensitive'
    ]
    res.render('water.ejs', {traits})
})
// air 
app.get('/air', (req, res) => {
    const traits = [
        'movement', 'creativity', 'action', 
        'adventure', 'exciting', 'easily provoked'
    ]
    res.render('air.ejs', {traits})
})
// fire
app.get('/fire', (req,res) => {
    const traits = [
        'passionate', 'strong emotions', 'temperamental', 
        'energetic', 'accomplished', 'interesting'
    ]
    res.render('fire.ejs', {traits})
})
app.get('/earth', (req,res) => {
    const traits = [
        'grounded', 'helpful', 'practical', 
        'realistic', 'materialistic', 'dependable'
    ]
    res.render('earth.ejs', {traits})
})




// Listen 
app.listen(PORT, () => {
    console.log(`We now welcome you to the lovely sound of port ${3333}`)
})


