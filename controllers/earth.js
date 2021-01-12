const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let earthSigns = ['Taurus', 'Virgo','Capricorn']
    let earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    res.render('elementDisplay', {signs: earthSigns, traits: earthTraits})
});

router.get('/taurus', (req, res)=>{
    res.render('')
})

router.get('/virgo', (req, res)=>{
    res.render('')
})

router.get('/capricorn', (req, res)=>{
    res.render('')
})

module.exports = router