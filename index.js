const express = require('express')
const app = express()
const layouts = require('express-ejs-layouts')
app.use(layouts)

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    // res.sendFile(__dirname+'/views/index.html')
    res.render('index.ejs')
})

app.get('/water', (req, res) =>{
    // res.sendFile(__dirname+'/views/about.html')
    let waterSigns = []
    let waterTraits = []
    res.render('elementDisplay', {signs: waterSigns, traits: waterTraits})
})

app.get('/air', (req, res) =>{
    // res.sendFile(__dirname+'/views/blog.html')
    let airSigns = ['aquarius', 'gemini', 'libra']
    let airTraits = ['movement', 'creativity', 'action', 'adventure']
    res.render('elementDisplay', {signs: airSigns, traits: airTraits})
})

app.get('/fire', (req, res) =>{
    // res.sendFile(__dirname+'/views/blog.html')
    let fireSigns = ['aries', 'leo','sagittarius']
    let fireTraits = ['passionate', 'strong emotions','temperamental','energetic','accomplished', 'interesting']
    res.render('elementDisplay', {signs: fireSigns, traits: fireTraits})
})

app.get('/earth', (req, res) =>{
    // res.sendFile(__dirname+'/views/blog.html')
    let earthSigns = ['taurus','virgo','crapricorn']
    let earthTraits = ['grounded','helpful', 'practical','realististic', 'materialistic','dependable']
    res.render('elementDisplay', {signs: earthSigns, traits: earthTraits})
})

app.listen(3000, ()=> {
    console.log('listen 3000')
})