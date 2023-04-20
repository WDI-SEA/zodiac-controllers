const express= require('express')
const router = express.Router()

//EARTH ROUTE using "/earth"

app.get('/', (req,res) =>{
    res.render('earth', {
        earth: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable'],
        earthSigns: ['Taurus', 'Virgo', 'Capricorn']
    }
    
    )
})

//earth/ Taurus

app.get('/taurus', (req,res) => {
    res.sendFile(__dirname + '/images/imgs/taurus.png'
       )
})

//earth/ Virgo
app.get('/virgo', (req,res) => {
    res.sendFile(__dirname + '/images/imgs/virgo.png'
       )
})

//earth/capricorn
app.get('/capricorn', (req,res) => {
    res.sendFile(__dirname + '/images/imgs/capricorn.png'
       )
})

module.exports = router;