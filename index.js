// configure and unrap packages
const express = require('express')
const app = express()

//set enviroment variable
const PORT = 8000

//need to set engine using app.set(name, value )
app.set('view engine', 'ejs')
app.use(express.static('public'))

//set controllers
// app.use('/air', require('./controllers/air'))
// app.use('/earth', require('./controllers/earth'))
// app.use('/fire', require('./controllers/fire'))
// app.use('/water', require('./controllers/water'))


//ROUTS

// HOME ROUTE using "/"
app.get('/', (req,res)=> {
    res.render('index')
})

//AIR ROUTE using "/air"

app.get('/air', (req,res) =>{
    res.render('air', {
        type: "air",
        air: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked'],
        airSigns: ['Aquarius', 'Gemini', 'Libra']
    })
})








//set up the listener
app.listen(PORT, ()=> {
    console.log(`The port is running at ${PORT}`)
})