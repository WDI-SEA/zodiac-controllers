// make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router

router.get('/', (req,res) => {
    // res.send('fire works!')
    res.render('fire.ejs', {
        signs: ['Aries', 'Leo', 'Sagittarius'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})

router.get('/leo', (req, res) => {
    res.render('signs.ejs')
})

router.get('/aries', (req, res) => {
    res.render('signs.ejs')
})

router.get('/sagittarius', (req, res) => {
    res.render('signs.ejs')
})

module.exports = router