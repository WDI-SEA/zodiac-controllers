const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/water', require('./controllers/water.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/fire', require('./controllers/fire.js'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.listen(8000, ()=>{
    console.log('Listen to the smooth jams of port 8000 🎙')
})