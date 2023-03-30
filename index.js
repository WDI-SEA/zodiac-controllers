// configure and unrap packages
const express = require('express')
const app = express()

//set enviroment variable
const PORT = 8000

//need to set engine using app.set(name, value )
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

//set controllers
app.use('/air', require('./controllers/air'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/water', require('./controllers/water'))


//ROUTS

// HOME ROUTE using "/"
app.get('/', (req,res)=> {
    res.render('index')
})

//WATER ROUTE using "/water"
app.get('/water', (req,res) =>{
    res.render('water', {
        water: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive'],
        
        waterSigns: ['Pisces', 'Cancer', 'Scorpio']

    })
})

//AIR ROUTE using "/air"

app.get('/air', (req,res) =>{
    res.render('air', {
        air: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked'],
        airSigns: ['Aquarius', 'Gemini', 'Libra']
    })
})

//FIRE ROUTE using "/fire"

app.get('/fire', (req,res) =>{
    res.render('fire', {
        fire: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting'],
        fireSigns: ['Aries', 'Leo', 'Sagittarius']
    }
    )
})

//EARTH ROUTE using "/earth"

app.get('/earth', (req,res) =>{
    res.render('earth', {
        earth: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable'],
        earthSigns: ['Taurus', 'Virgo', 'Capricorn']
    }
    
    )
})

//set up the listener
app.listen(PORT, ()=> {
    console.log(`The port is running at ${PORT}`)
})