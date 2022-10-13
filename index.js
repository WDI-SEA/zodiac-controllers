const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')


// Routs

app.get('/', (req,res)=>{
    res.render('HOME')
})

app.get('/water', (req,res)=>{
    res.render('WATER')
})

app.get('/air', (req,res)=>{
    res.render('AIR')
})

app.get('/fire', (req,res)=>{
    res.render('FIRE')
})

app.get('/earth', (req,res)=>{
    res.send('EARTH')
})



app.listen(PORT, ()=>console.log("I'm Listening.."))