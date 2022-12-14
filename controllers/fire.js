const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate', 'strong emotions', 'hot', 'energetic', 'accomplished', 'interesting']
    })
})

module.exports = router