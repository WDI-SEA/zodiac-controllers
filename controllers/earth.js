const express = require('express')
const router = express.Router()
const stars = {
    earth: {
        signs: ['Tauros', 'Virgo', 'Capricorn'],
        traits: ['Helpful', 'Realistic', 'Dependable']
    }
}
router.get('/', function (req, res) {
    const signs = stars.earth.signs
    const traits = stars.earth.traits
    res.render('page.ejs', { signs: signs, traits: traits, element: 'earth' })
})

module.exports = router