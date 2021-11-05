const express = require('express')
const router = express.Router()

const fireSigns = ['Aries', 'Leo', 'Safittarius']
const fireTraits = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
router.get('/', (req, res)=>{
    res.render('fire.ejs', {fireSigns, fireTraits})
})

router.get('/aries', (req, res)=>{
    res.render('fire/aries.ejs')
})

router.get('/leo', (req, res)=>{
    res.render('fire/leo.ejs')
})

router.get('/sagittarius', (req, res)=>{
    res.render('fire/sagittarius.ejs')
})

// //export all routes in this file
module.exports = router