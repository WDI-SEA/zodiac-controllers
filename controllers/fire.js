const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let fireSigns = ['Aries', 'Leo','Sagittarius']
    let fireTraits = ['Passionate', 'Strong Emotions', 'Tempermental', 'Energetic', 'Accomplished', 'Interesting']
    res.render('elementDisplay', {signs: fireSigns, traits: fireTraits})
});

router.get('/aries', (req, res)=>{
    res.render('aries.ejs')
})

router.get('/leo', (req, res)=>{
    res.render('leo.ejs')
})

router.get('/sagittarius', (req, res)=>{
    res.render('sagittaruis.ejs')
})

module.exports = router