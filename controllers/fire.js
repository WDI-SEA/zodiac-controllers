const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const fireSigns = ['aries', 'leo', 'sagittarius']
    const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire/fire.ejs', {fireSigns, fireTraits})
})

router.get('/aries', (req, res) => {
    res.render('fire/aries.ejs')
})

router.get('/leo', (req, res) => {
    res.render('fire/leo.ejs')
})

router.get('/sagittarius', (req, res) => {
    res.render('fire/sagittarius.ejs')
})

module.exports = router 