const express = require('express')
const router = express.Router()

const elements = {
    air: {
        signs: ['aquarius', 'gemini', 'libra'],
        traits: ['movement', 'creatvity', 'action']
    },
    water: {
        signs: ['pisces', 'cancer', 'scorpio'],
        traits: ['private', 'mysterious', 'action']
    },
    fire: {
        signs: ['aries', 'leo', 'sagittarius'],
        traits: ['movement', 'creatvity', 'action']
    },
    earth: {
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['movement', 'creatvity', 'action']
    }
}  

router.get('/:sign', (req, res) =>{
    const symbol = req.params.sign
    const file = symbol + ".png"
    res.render("sign.ejs", {symbol:req.params.sign})
})

module.exports = router