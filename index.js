const express = require('express')
const app = express()
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render('layout.ejs')
})
app.use('/water', require('./controllers/water'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))
app.use('/earth', require('./controllers/earth'))
app.listen(8000, function(){
    console.log('running server')
})