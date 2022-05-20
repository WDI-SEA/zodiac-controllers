// require packages
const express = require('express')

const ejsLayouts = require('express-ejs-layouts')
// app config
const app = express()
const PORT = 3300
app.set('view engine', 'ejs')
//middlewares
app.use(ejsLayouts)
// tel  express to send static assets
app.use(express.static('Public'))











// app.get('/water', (req, res) => {
//     const element = 'water'
//     const signs = ['pisces', 'cancer', 'scorpio']
//     const traits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
//     res.render('water.ejs', {traits: traits, signs:  signs, element: element})
// })

app.get('/', (req, res) => {
    //res.send('t')
    res.render('index.ejs')
})
//controllers
app.use('/air', require('./controllers/air'))
app.use('/water', require('./controllers/water'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))


// app.get('/air', (req, res) => {
//     const element = 'air'
//     const signs = ['aquarius', 'gemini', 'libra']
//     const traits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easilt provoked']
//     res.render('air.ejs', {traits: traits, signs:  signs, element: element})
// })
// app.get('/fire', (req, res) => {
//     const element = 'fire'
//     const signs = ['aires',' leo', 'saggitarius']
//     const traits = ['passionate', 'strong emotional', 'tempermental', 'energetic', 'accomplished', 'interesting']
//     res.render('fire.ejs', {traits: traits, signs:  signs, element: element})
// })
// app.get('/earth', (req, res) => {
//     const element = 'earth'
//     const signs = ['taurus', 'virgo', 'capricorn']
//     const traits = ['grounded', 'helpful', 'practicul', 'realistic', 'materialistic', 'dependable']
//     res.render('fire.ejs', {traits: traits, signs:  signs, element: element})
// })

app.listen(PORT, () => {
    console.log('hi')
})
