const express = require('express')

const router = express.Router()


// AIR ROUTE
// list of air signs and relevant traits from the graphic above
router.get('/', (req, res) => {
    // res.send('Hello Air')


    res.render('air.ejs', 
    {
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})



router.get('/gemini', (req, res) => {
    res.render('air/gemini.ejs')
})


router.get('/libra', (req, res) => {
    res.render('air/libra.ejs')
})


router.get('/aquarius', (req, res) => {
    res.render('air/aquarius.ejs')
})

module.exports = router