const express = require('express')
const router = express.Router()

router.get('/fires', (req, res) => {
    res.render('fire.ejs' , {
        Signs: ['leo', 'aries', 'sagittarius'],
        Abilities: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})

module.exports = router