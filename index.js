

const express = require('express')
const app = express()
//import ejs layouts
const ejsLayouts = require('express-ejs-layouts')


//middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req,res)=>{
    //res.send('hello')
    res.render('index.ejs')
})

app.get('/water', (req,res)=>{
    res.render('water.ejs', {waterArr: ['private','mysterious','psychic','charming','emotional','sensitive']})
})

app.get('/air', (req,res)=>{
    res.render('air.ejs', {airArr: ['movement','creativity','action','adventure','exciting','easily provoked']})
})

app.get('/fire', (req,res)=>{
    res.render('fire.ejs', {fireArr: ['passionate','strong emotions','temperamental','energetic','accomplished','interesting']})
})

app.get('/earth', (req,res)=>{
    res.render('earth.ejs', {earthArr: ['grounded','helpful','practical','realistic','materialistic','dependable']})
})

app.listen(8000, ()=>{
    console.log('heheh')
})

