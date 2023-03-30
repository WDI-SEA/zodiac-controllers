// configure and unrap packages
const express = require('express')
const app = express()

//set enviroment variable
const PORT = 8000

//need to set engine using app.set(name, value )
app.set('view engine', 'ejs')

//ROUTS

// HOME ROUTE using "/"
app.get('/', (req,res)=> {
    res.render('index')
})

//WATER ROUTE using "/water"
app.get('/water', (req,res) =>{
    res.render('water', {
        water: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    })
})

//AIR ROUTE using "/air"

app.get('/air', (req,res) =>{
    res.render('air', {
        air: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    })
})

//FIRE ROUTE using "/fire"

app.get('/fire', (req,res) =>{
    res.render('fire', {
        fire: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    })
})

//EARTH ROUTE using "/earth"

app.get('/earth', (req,res) =>{
    res.render('earth', {
        earth: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    })
})

//set up the listener
app.listen(PORT, ()=> {
    console.log(`The port is running at ${PORT}`)
})