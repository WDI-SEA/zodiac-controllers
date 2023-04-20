const express= require('express')
const router = express.Router()

//WATER ROUTE using "/water"
app.get('/', (req,res) =>{
    res.render('water', {
        water: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive'],
        
        waterSigns: ['Pisces', 'Cancer', 'Scorpio']

    })
})


module.exports = router;