const express = require('express')

const app = express()
const Port = 3000
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.use('/water', require('./controllers/waterSign'))

app.use('/air', require('./controllers/airSign'))

app.use('/fire', require('./controllers/fireSign'))

app.use('/earth', require('./controllers/earthSign'))


app.listen(Port, () => {
    console.log(`listen on Port ${Port}`)
})