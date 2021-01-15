// Import express. ORDER OF CODE MATTERS
const express = require('express')
const layouts = require('express-ejs-layouts')

// Create an object to hold express (tbh I don't really know how this works)
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.use(layouts)

app.get('/', (req, res) => {
    //res.send('Hello')
    res.render('index.ejs', {sign: '', traits: []})
})

app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))

// Tell express what port number to listen to
app.listen(3000, () => {console.log('Listening on port 3000')})