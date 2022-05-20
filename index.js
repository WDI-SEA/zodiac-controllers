// import package
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

const app = express()
const PORT = 3333

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(ejsLayouts)

// home
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// water
app.use('/water', require('./controllers/water'))

// air
app.use('/air', require('./controllers/air'))

// fire
app.use('/fire', require('./controllers/fire'))

// earth
app.use('/earth', require('./controllers/earth'))


app.listen(PORT, () => {
    console.log(`suck my port: ${PORT} peni$`)
})