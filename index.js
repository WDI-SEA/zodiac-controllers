const express = require('express')
const app = express()

const layouts = require('express-ejs-layouts')
app.use(layouts)

// After we npm i ejs, the below line allows us to replace .html with .ejs
app.set('view engine', 'ejs')

// So we can access local images. Folder MUST be named 'public' and images folder MUST be within 'public'
app.use(express.static(__dirname + '/public'))

// Routers // Controllers
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/water', require('./controllers/water.js'))

app.get('/', (req, res) => {
    // Use res.render(index.js, {}) (file names MUST be in a folder specifically named 'views') when we use EJS
    // instead of response.sendFile(__dirname+'/views/about.html')
    res.render('index.ejs', {name: 'Trisha', faveFoods: ['sushi', 'pad thai', 'casado']})
})

app.get('/air', (req, res) => {
    let airSigns = ['Aquarius', 'Gemini', 'Libra']
    let airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('displayElement.ejs', {element: 'Air', signs: airSigns, traits: airTraits})
})

app.get('/earth', (req, res) => {
    // res.send("Earth route sent!") Used to check that our pages are linked.
    let earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    let earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('displayElement.ejs', {element: 'Earth', signs: earthSigns , traits: earthTraits})
})

app.get('/fire', (req, res) => {
    let fireSigns = ['Aries', 'Leo', 'Sagittarius']
    let fireTraits = ['passionate', 'strong emtoions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('displayElement.ejs', {element: 'Fire', signs: fireSigns, traits: fireTraits})
})

app.get('/water', (req, res) => {
    let waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    let waterTraits = ['private', 'mysterious', 'pyschic', 'charmign', 'emotional', 'sensitive']
    res.render('displayElement.ejs', {element: 'Water', signs: waterSigns, traits: waterTraits})
})

app.listen(3000, () => console.log("Listening on port 3000"))