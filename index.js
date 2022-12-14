const express = require('express')
const app = express ()
const PORT = 5500

app.get('/', (req, res) => {
    res.send('3 navigation links (/water, /air, /fire, /earth)')
})

app.get('/water', (req, res) =>{
    res.send('Water Sign')
})

app.get('/air', (req, res) =>{
    res.send('Air Sign')
})

app.get('/fire', (req, res) =>{
    res.send('Fire Sign')
})

app.get('/earth', (req, res) =>{
    res.send('Earth Sign')
})


app.listen(PORT, () => {
    console.log('Port running!')
})