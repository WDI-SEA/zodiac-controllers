const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let waterSigns = ['Pisces', 'Cancer','Scorpio']
    let waterTraits = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    res.render('elementDisplay', {signs: waterSigns, traits: waterTraits})
});

router.get('/pisces', (req, res)=>{
    res.render('')
})

router.get('/cancer', (req, res)=>{
    res.render('')
})

router.get('/scorpio', (req, res)=>{
    res.render('')
})

module.exports = router