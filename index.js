// required packages //
const express = require('express')
//app config //
const app = express()
const PORT = 5500
app.set('view engine', 'ejs')
app.use(express.static('public'))

// ROUTES //

// Home
app.get('/', (req,res) => {
    res.render(`home.ejs`)
})

// Water
app.use('/water', require('./controllers/water'))

// Air
app.use('/air', require('./controllers/air'))

// Fire
app.use('/fire', require('./controllers/fire'))

// Earth
app.use('/earth', require('./controllers/earth'))

//listen on a port
app.listen(PORT, () => {
    console.log(`We're listening to port ${PORT} 🎧😎`)
})