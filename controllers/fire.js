const express = require('express')
const router = express.Router()

router.get('/fire', (req, res)=>{
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireTraits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    router.render('fire.ejs', {fireSigns, fireTraits})
})

module.exports = router