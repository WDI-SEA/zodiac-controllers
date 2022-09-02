
// import the required packages
const express = require('express')
// const ejsExpressLayouts = require('express-ejs-layouts')

// set up express instance app
const app = express()
const PORT = 8003
const introStatement = `Let's learn about the signs!`
// const signsArr = ['water', 'air', 'fire', 'earth']
// const airTraitsArr = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
// const waterTraitsArr = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
// const fireTraitsArr = ['passioante', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
// const earthTraitsArr = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
const elements = {
    air: {
        name: "air",
        signs: ['aquarius', 'geminin', 'libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },

    water: {
        name: "water",
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    },

    fire: {
        name: "fire",
        signs: ['aries', 'leo', 'sagittarius'],
        traits: ['passioante', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    },

    earth: {
        name: "earth",
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    },
}



// CONFIGURE APP TO USE EJS
app.set('view engine', 'ejs')
// app.use(ejsExpressLayouts)

app.use('/air', require('./controllers/air'))
app.use('/water', require('./controllers/water'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))


// verbs
app.get("/", (req, res) => {
    // res.send(`This is my home page`)
    res.render('index', {signs: elements, intro: introStatement})
})

app.get('/air', (req, res) => {
    // res.send('This is my AIR page')
    // res.render('air')
    // res.json(elements.air)
    console.log('heyoooooo')
    res.render('show', {element: elements.air})
})

app.get('/water', (req, res) => {
    // res.send('This is my water page')
    // res.render('water', {traits: waterTraitsArr})
    res.render('show', {element: elements.water})
})


app.get('/fire', (req, res) => {
    // res.send('This is my FIREEEE page')
    // res.render('fire', {traits: fireTraitsArr})
    res.render('show', {element: elements.fire})
})

app.get('/earth', (req, res) => {
    // res.send('This is my mother earth page')
    // res.render('earth', {traits: earthTraitsArr})
    res.render('show', {element: elements.earth})
})
// listen
app.listen(PORT, () => {
    console.log(`The ${PORT} is on fire!`)
})


