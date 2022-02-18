

const express = require('express') //import express
const ejsLayouts = require('express-ejs-layouts')

const app = express() //create instance of express . app is industry standard 
//import ejs layouts
PORT = 8000

//middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)


app.get('/', (req,res)=>{
    //res.send('hello') could also put html elements inside res.send i.e. <p>
    res.render('index.ejs')
})

app.get('/water', (req,res)=>{
    res.render('water.ejs', {signs: ['pisces', 'cancer', 'scorpio'], waterArr: ['private','mysterious','psychic','charming','emotional','sensitive']})
})

app.get('/air', (req,res)=>{
    res.render('air.ejs', {signs: ['aquarius', 'gemini', 'libra'], airArr: ['movement','creativity','action','adventure','exciting','easily provoked']})
})

app.get('/fire', (req,res)=>{
    res.render('fire.ejs', {signs: ['aries', 'leo', 'sagittarius'], fireArr: ['passionate','strong emotions','temperamental','energetic','accomplished','interesting']})
})

app.get('/earth', (req,res)=>{
    res.render('earth.ejs', {signs: ['taurus', 'virgo', 'capricorn'], earthArr: ['grounded','helpful','practical','realistic','materialistic','dependable']})
})

app.listen(PORT, err =>{
    console.log(`Listening to the sounds of ${PORT}`)
    if (err) console.log(err)
})

