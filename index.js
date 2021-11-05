const express = require('express')
const app = express();
const ejsLayouts = require('express-ejs-layouts')

// middleware 
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/elements', require('./controllers/water.js'))
app.use('/elements', require('./controllers/air.js'))
app.use('/elements', require('./controllers/earth.js'))
app.use('/elements', require('./controllers/fire.js'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})






app.listen(8000, () => {
    console.log('Listening to port 8000 🌍');
})