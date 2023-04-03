const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

// contollers connections
app.use('/air', require('./controllers/air.js'))
app.use('/water', require('./controllers/water'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))


app.listen(PORT, function(){
    console.log(`Server ${PORT} linked`)
})