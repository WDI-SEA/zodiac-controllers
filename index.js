const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const PORT = 3000
//MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//controllers middleware
app.use('/water', require('./controllers/water'))
app.use('/earth', require('./controllers/earth'))
app.use('/air', require('./controllers/air'))
app.use('/fire', require('./controllers/fire'))


//HOME route
app.get("/", (req,res)=>{
    res.render('index.ejs')
    
})



//indicate a port to run the server on
app.listen(PORT, ()=>{
    console.log(`HELLO FROM PORT ${PORT}`)
})
