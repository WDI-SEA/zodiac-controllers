const express = require('express')
const app = express()
const PORT = 5500

app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))
app.use('/water', require('./controllers/water'))

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.listen(PORT, function () {
    console.log('PUT YOUR HANDS IN THE AYERRR')
})