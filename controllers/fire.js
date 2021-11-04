const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const fireTraits = ['passionate', 'strong emotion', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fireTraits: fireTraits})
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