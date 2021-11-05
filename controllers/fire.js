const express = require('express')
const router = express.Router()

router.get('/fire', (req, res) => {
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('elements/fire.ejs', {fire, fireSigns})
})

router.get('/fire/aries', (req,res) => {
    res.render('elements/signsImages/aries.ejs')
})
router.get('/fire/leo', (req,res) => {
    res.render('elements/signsImages/leo.ejs')
})
router.get('/fire/sagittarius', (req,res) => {
    res.render('elements/signsImages/sagittarius.ejs')
})

module.exports = router