const express = require('express')
const router = express.Router()

router.get('/earths', (req, res) => {
    res.render('earth.ejs' , {
        Signs: ['taurus', 'virgo', 'capricorn'],
        Abilities: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})

module.exports = router