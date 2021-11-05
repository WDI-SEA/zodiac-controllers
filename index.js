const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const path = require('path')
const router = express.Router()
// tell app to use EJS templating. It will automatically look for views folder and files in that folder that end in .ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// app.use is what happens when the server hears a request
// app.use with require controller etc means it loads the controller .js files instead of having that logic in this main file
app.use('/air', require('./controllers/air.js'))
app.use('/earth', require('./controllers/earth.js'))
app.use('/water', require('./controllers/water.js'))
app.use('/fire', require('./controllers/fire.js'))
// req = incoming request, res = outgoing response. Req parses incoming HTTP request and turns it into an object.  Res methods do something with that incoming object and sends it back as HTML

// routing: routing incoming request to an outgoing response
app.get('/', (req, res) => {
    // render is part of EJS, listens to request and sends EJS page.  Always looks for the Views folder for the files, no need to put in views/
    res.render('home')
})
// once request is made for /air, it calls to render the air.ejs file
app.get('/air', (req, res) => {
    res.render('air')
})
app.get('/earth', (req, res) => {
    res.render('earth')
})
app.get('/water', (req, res) => {
    res.render('water')
})
app.get('/fire', (req, res) => {
    res.render('fire')
})
app.get('*', (req, res) => {
    res.send("Are you trying to hack me???")
})
// a port is an entrance to the server/machine
app.listen(8000);