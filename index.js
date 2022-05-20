// set up npms
const express = require('express')
const app = express()
const PORT = 2002
const ejsLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')

app.use(ejsLayouts)

// 4 routes
app.get('/', (req, res) => {
    res.send('navigation links')
})
app.get('/water', (req, res)=>{
    res.send('water')
})
app.get('/air', (req, res)=>{
    res.send('air')
})
app.get('/fire', (req, res)=>{
    res.send('fire')
})
app.get('/earth', (req, res)=>{
    res.send('earth')
})
app.listen(PORT, () => {
    console.log(PORT, 'linked')
})
