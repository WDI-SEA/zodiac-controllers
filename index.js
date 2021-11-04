const express = require('express')
const app = express()

const ejsLayouts = require('express-ejs-layouts')

// middleware
app.set('view engine', 'ejs')

app.use(ejsLayouts)

app.get('/', (req, res)=>{
    res.send('hello')
})

app.get('/air', (req, res)=>{
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airTraits})
})

app.get('/earth', (req, res)=>{
    const earthTraits = ['grounded', 'helpful', 'pratical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthTraits})
})

app.get('/fire', (req, res)=>{
    const earthTraits = ['grounded', 'helpful', 'pratical', 'realistic', 'materialistic', 'dependable']
    res.render('earth.ejs', {earthTraits})
})

app.listen(8000, ()=>{
console.log('check to see if it works')
})