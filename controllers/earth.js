// import express
// create an express router
const express = require('express')
const router = express.Router()

// earth route
router.get('/', (req, res)=>{
    // res.send('this is the earth page')
    // const earth = ['grounded', 'helpful', 'practical', 'materialistic', 'dependable', 'realistic']
    // res.render('earth.ejs', {earth})
    res.render('earth.ejs', {
        element: 'earth',
        signs: ['taurus', 'virgo', 'capricorn'],
        traits: ['grounded', 'helpful', 'practical', 'materialistic', 'dependable', 'realistic']
    })
})

router.get('/taurus', (req, res)=>{
    res.send('taurus')
})
router.get('/virgo', (req, res)=>{
    res.send('virgo')
})
router.get('/capricorn', (req, res)=>{
    res.send('capricorn')
})

// export the router
module.exports = router