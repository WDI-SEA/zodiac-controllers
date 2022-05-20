const express = require('express')
// create and express router
const router = express.Router()
// mount routes on the router
router.get('/', (req, res) => {
    res.render('fire.ejs', {
        element: 'Fire',
        signs: ['ARIES', 'LEO', 'SAGITTARIUS'],
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})
router.get('/aries', (req, res)=>{
    res.render('imgs.ejs', {sign: 'aries'})
})
router.get('/leo', (req, res)=>{
    res.render('imgs.ejs', {sign: 'leo'})
})
router.get('/sagittarius', (req, res)=>{
    res.render('imgs.ejs', {sign: 'sagittarius'})
})

// export the router
module.exports = router