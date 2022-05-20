const express = require('express')
const ejsLayouts = require('express-ejs-layouts')


const app = express ()
const PORT = 4000

app.set('view engine', 'ejs')

app.use(express.static('Public'))

app.use(ejsLayouts)


app.get('/', (req, res) => {
    // res.send('hello')
    res.render('index.ejs')
})

app.get('/water', (req,res) => {
    const waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterTraits},)
})

app.get('/air', (req,res) => {
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    // res.send('see if it works')
    res.render('air.ejs', {airTraits})
})

app.get('/fire', (req,res) => {
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    // res.send('see if it works')
    res.render('fire.ejs', {fireTraits})
})

app.get('/earth', (req,res) => {
    // res.send('see if it works')
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthTraits})
})








app.listen(PORT, () => {
    console.log(`listening in to the port ${3000}`)
})