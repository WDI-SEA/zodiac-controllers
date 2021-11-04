const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    const fireDes = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fire/fire', {fireDescription: fireDes})
})

router.get('/leo', (req,res) => {
    res.render('fire/leo')
})

router.get('/aries', (req,res) => {
    res.render('fire/aries')
})

router.get('/sagittarius', (req,res) => {
    res.render('fire/sagittarius')
})


module.exports = router