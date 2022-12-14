const express = require('express')
const app = express()
const PORT = 9001
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use('/public/assets/imgs', express.static('./public/assets/imgs'))
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))


app.listen(PORT, () => {
    console.log('running')
})