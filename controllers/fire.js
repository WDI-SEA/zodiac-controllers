const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireTraits = ['Passionate', 'Strong Emotions', 'Temperamental', 'Enegertic', 'Accomplished', 'Interesting']
    res.render('fire.ejs', {fireSigns, fireTraits})
})

router.get('/aries', (req, res) => {
    res.render('fire/aries.ejs')
})

router.get('/sagittarius', (req, res) => {
    res.render('fire/sagittarius.ejs')
})

router.get('/leo', (req, res) => {
    res.render('fire/leo.ejs')
})

module.exports = router