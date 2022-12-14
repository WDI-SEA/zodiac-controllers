const express = require('express')
const router = express.Router()
const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['pyshic', 'mysterious', 'private','charming', 'emotional', 'sensitive']
    },
    fire: {
        signs: ['ares', 'leo', 'sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    },

}
// get /earth 
router.get('/', function(req, res){
    const signs = elements.earth.signs
    const traits = elements.earth.traits
    res.render('show.ejs', {signs:signs, traits:traits, element:'earth'})
})
router.get('/:sign', function(req, res){
    res.send(req.params.sign)
})

module.exports = router