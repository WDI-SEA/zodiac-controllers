const express = require('express')
const app = express()
const PORT = 3000
const ejsLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')

app.use(ejsLayouts)
app.use(express.static('public'))
app.use('/water', require('./controllers/water'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))
app.listen(PORT, ()=> {
    console.log(`intruder in sector ${PORT}`)
})


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/air', (req, res) => {
    res.render('air/air', elements)
}) 
app.get('/fire', (req, res) => {
    res.render('fire', elements)
}) 
app.get('/earth', (req, res) => {
    res.render('earth', elements)
}) 
