const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/water', require('./controllers/water.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/air', require('./controllers/air.js'))

app.get('/', (req,res) => {
    res.render('home.ejs')
})




app.get('/air', (req,res) => {
    const airDes = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air', {airDescription: airDes})
})



app.listen(8000, () => {
    console.log('Im listening')
})
