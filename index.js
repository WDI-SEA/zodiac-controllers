
// import the required packages
const express = require('express')

// set up express instance app
const app = express()
const PORT = 8003
const introStatement = `Let's learn about the signs!`
const signsArr = ['water', 'air', 'fire', 'earth']
const airTraitsArr = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
const waterTraitsArr = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
const fireTraitsArr = ['passioante', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
const earthTraitsArr = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']


// CONFIGURE APP TO USE EJS
app.set('view engine', 'ejs')

// verbs
app.get("/", (req, res) => {
    // res.send(`This is my home page`)
    res.render('index', {signs: signsArr, intro: introStatement})
})

app.get('/water', (req, res) => {
    // res.send('This is my water page')
    res.render('water', {traits: waterTraitsArr})
})

app.get('/air', (req, res) => {
    // res.send('This is my AIR page')
    res.render('air', {traits: airTraitsArr})
})

app.get('/fire', (req, res) => {
    // res.send('This is my FIREEEE page')
    res.render('fire', {traits: fireTraitsArr})
})

app.get('/earth', (req, res) => {
    // res.send('This is my mother earth page')
    res.render('earth', {traits: earthTraitsArr})
})
// listen
app.listen(PORT, () => {
    console.log(`The ${PORT} is on fire!`)
})


