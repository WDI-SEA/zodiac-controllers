const express = require('express')
const router = express.Router()
const stars = {
    fire: {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate', 'tempermental', 'energetic']
    }
}
router.get('/', function (req, res) {
    const signs = stars.fire.signs
    const traits = stars.fire.traits
    res.render('page.ejs', { signs: signs, traits: traits, element: 'fire' })
})

module.exports = router