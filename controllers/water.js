
const express = require('express')

const router = express.Router()


// WATER ROUTE
// list of water signs and relevant traits from the graphic above
router.get('/', (req, res) => {

    // res.send('Hello Water')


    res.render('water.ejs', 
    {
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })


})


router.get('/cancer', (req, res) => {
    res.render('water/cancer.ejs')
})


router.get('/scorpio', (req, res) => {
    res.render('water/scorpio.ejs')
})


router.get('/pisces', (req, res) => {
    res.render('water/pisces.ejs')
})



module.exports = router