const express = require('express')
const router = express.Router()

router.get('/sagittarius', (req, res) =>{
    res.render('fire/sagittarius.ejs')
})

router.get('/aries', (req, res) =>{
    res.render('fire/aries.ejs')
})

router.get('/leo', (req, res) =>{
    res.render('fire/leo.ejs')
})

module.exports = router