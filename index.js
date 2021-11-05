const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')
app.use(ejsLayouts)

app.set('view engine', 'ejs')

app.use('/air', require('./controllers/air.js'))

app.use('/earth', require('./controllers/earth.js'))

app.use('/fire', require('./controllers/fire.js'))

app.use('/water', require('./controllers/water.js'))


app.get('/', (req, res) => {
    res.render('index')
})



app.listen(8000, () => {
    console.log('now listening on 8000......')
})