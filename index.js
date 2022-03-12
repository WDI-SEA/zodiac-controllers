const express = require('express') //import express
const ejsLayouts = require('express-ejs-layouts')

const app = express() //create instance of express . app is industry standard 
//import ejs layouts
PORT = 8000

//middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//controller middleware
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))


app.get('/', (req,res)=>{
    //res.send('hello') could also put html elements inside res.send i.e. <p>
    res.render('index.ejs')
})

app.listen(PORT, err =>{
    console.log(`Listening to the sounds of ${PORT}`)
    if (err) console.log(err)
})

