// important
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// more important stuff 
const app = express();
const PORT = 3000

// also important
app.set('view engine', 'ejs')

// super important (middlewares)
app.use(ejsLayouts)

app.use(express.static('public'))
// super important for the other things to work
app.use('/water', require('./controllers/water'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))

// this is less important but its a good placeholder for the index for now
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// the most important thing of all
app.listen(PORT, () => {
    console.log(`zodiac server is live on port ${PORT}`)
})