const express = require('express')

const app = express()
const PORT = 8000
app.set('view enging', 'ejs')

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('layout.ejs')
})

app.use('/water', require('./controllers/water'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))


app.listen(PORT, () => {
    console.log(`${PORT}[rptrt]`)
})