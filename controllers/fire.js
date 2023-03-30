const express= require('express')
const router = express.Router()

//FIRE ROUTE using "/fire"

app.get('/', (req,res) =>{
    res.render('fire', {
        fire: ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting'],
        fireSigns: ['Aries', 'Leo', 'Sagittarius']
    }
    )
})

module.exports = router;