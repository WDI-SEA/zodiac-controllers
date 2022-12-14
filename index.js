//required packages
const express = require('express')

//app config
const app = express()
const PORT = 8080

//set view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static('public'))

//routes
app.get('/',(req,res) =>{
    res.render('index.ejs')
})


app.use('/air', require('./controllers/air'))

app.get('/air/aquarius',(req,res) =>{
    res.render('aquarius.ejs')
    })
app.get('/air/gemini',(req,res) =>{
    res.render('gemini.ejs')
    })
app.get('/air/libra',(req,res) =>{
    res.render('libra.ejs')
    })




app.use('/water', require('./controllers/water'))

app.get('/water/pisces',(req,res) =>{
    res.render('pisces.ejs')
    })
app.get('/water/cancer',(req,res) =>{
    res.render('cancer.ejs')
    })
app.get('/water/scorpio',(req,res) =>{
    res.render('scorpio.ejs')
    })


app.use('/fire', require('./controllers/fire'))

app.get('/fire/aries',(req,res) =>{
    res.render('aries.ejs')
    })
app.get('/fire/leo',(req,res) =>{
    res.render('leo.ejs')
    })
app.get('/fire/sagittarius',(req,res) =>{
    res.render('sagittarius.ejs')
    })

app.use('/earth', require('./controllers/earth'))

app.get('/earth/taurus',(req,res) =>{
    res.render('taurus.ejs')
    })
app.get('/earth/virgo',(req,res) =>{
    res.render('virgo.ejs')
    })
app.get('/earth/capricorn',(req,res) =>{
    res.render('capricorn.ejs')
    })


//listen on a port
app.listen(PORT, ()=> {
    console.log(`listening on PORT ${PORT}`)
})