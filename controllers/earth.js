const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earth/earth.ejs', {earthTraits: earthTraits})
})
router.get('/capricorn', (req, res)=>{
    res.render('earth/capricorn')
})
router.get('/taurus', (req, res)=>{
    res.render('earth/taurus.ejs')
})
router.get('/virgo', (req, res)=>{
    res.render('earth/virgo.ejs')
})

module.exports = router