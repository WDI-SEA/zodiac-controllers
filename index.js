const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE

app.set('view engine', 'ejs')
app.use(ejsLayouts)

// HOME route
app.get('/', (req, res)=>{
    res.render('index.ejs')
})

// EARTH route
app.get('/earth', (req, res)=>{
    res.render('earth.ejs', {})
    // res.send('Hello Earth Nation')
})

// FIRE route
app.get('/fire', (req, res)=>{
    res.send('Hello World')
})

// WATER route
app.get('/water', (req, res)=>{
    res.send('Hello World')
})

// AIR route
app.get('/air', (req, res)=>{
    res.send('Hello World')
})

app.listen(8000, ()=>{
    console.log('The Last Airbender')
})
