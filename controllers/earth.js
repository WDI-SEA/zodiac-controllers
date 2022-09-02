const express = require('express')
const router = express.Router()
const earthSigns = ["Taurus", "Virgo", "Capricorn"]
const earthThings = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']

router.get('/', (req, res) => {
    res.render('earth', {earthSigns, earthThings})
})



module.exports = router