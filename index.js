const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('This is the Home Page')
    res.render('index')
})
app.get('/water', (req, res) => {
    // res.send('This is the water page')
    res.render('water')
})
app.get('/air', (req, res) => {
    // res.send('This is the air page')
    res.render('air')
})
app.get('/fire', (req, res) => {
    // res.send('This is the fire page')
    res.render('fire')
})
app.get('/earth', (req, res) => {
    // res.send('This is the earth page')
    res.render('earth')
})

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})