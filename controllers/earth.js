const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const earthTraits = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    res.render('earth/earth.ejs', {earthTraits: earthTraits})
})
router.get('/capricorn', (req, res)=>{
    res.render('earth/capricorn.ejs')
})
router.get('/taurus', (req, res)=>{
    res.render('earth/taurus.ejs')
})
router.get('/virgo', (req, res)=>{
    res.render('earth/virgo.ejs')
})

module.exports = router