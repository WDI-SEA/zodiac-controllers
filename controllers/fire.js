const express = require('express')

const router = express.Router()


// FIRE ROUTE
// list of fire signs and relevant traits from the graphic above
router.get('/', (req, res) => {
    // res.send('Hello Fire')


    res.render('fire.ejs', 
    {
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})


router.get('/leo', (req, res) => {
    res.render('fire/leo.ejs')
})


router.get('/aries', (req, res) => {
    res.render('fire/aries.ejs')
})


router.get('/sagittarius', (req, res) => {
    res.render('fire/sagittarius.ejs')
})

module.exports = router