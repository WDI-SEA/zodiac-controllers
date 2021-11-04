const express = require('express')
const router = express.Router()

router.get('/water', (req, res)=>{
    const waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    const waterTraits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {waterSigns, waterTraits})
})

module.exports = router