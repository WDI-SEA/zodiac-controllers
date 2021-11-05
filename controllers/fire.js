const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const fireTraits = ['Passionate', 'Strong Emotion', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
    res.render('fire/fire.ejs', {fireTraits: fireTraits})
})

router.get('/sagittarius', (req, res)=>{
    res.render('fire/sagittarius.ejs')
})
router.get('/aries', (req, res)=>{
    res.render('fire/aries.ejs')
})
router.get('/leo', (req, res)=>{
    res.render('fire/leo.ejs')
})

module.exports = router 