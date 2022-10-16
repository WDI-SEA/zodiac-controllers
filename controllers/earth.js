const express = require('express')

const router = express.Router()



// EARTH ROUTE
// list of earth sign and relevant traits from the graphic above
router.get('/', (req, res) => {
    // res.send('Hello Earth')


    res.render('earth.ejs', 
    {
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})




router.get('/taurus', (req, res) => {
    res.render('earth/taurus.ejs')
})


router.get('/virgo', (req, res) => {
    res.render('earth/virgo.ejs')
})


router.get('/capricorn', (req, res) => {
    res.render('earth/capricorn.ejs')
})


module.exports = router