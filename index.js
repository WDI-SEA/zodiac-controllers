const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const app = express()

const PORT = 3333
//make home route
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static( "public"))
app.get('/', function(req,res){
    res.render('index.ejs')
})
app.get('/water', function(req,res){
    res.send('This is water')
})
app.get('/air', function(req,res){
    res.send('This is air')
})
app.get('/fire', function(req,res){
    res.send('This is  fire')
})
app.get('/earth', function(req,res){
    res.send('This is earth')
})

// listen to port
app.listen(PORT, function(){
    console.log('listen')
})