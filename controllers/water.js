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
// get /water 
router.get('/', function(req, res){
    const signs = elements.water.signs
    const traits = elements.water.traits
    res.render('show.ejs', {signs:signs, traits:traits, element: 'water'})
    
})
router.get('/:sign', function(req, res){
    res.send(req.params.sign)
})
module.exports = router