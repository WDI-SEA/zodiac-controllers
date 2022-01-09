const express = require('express')
const router = express.Router()


router.get('/gemini', (req, res)=> {
    res.render('air/gemini')
})

router.get('/aquarius', (req, res)=> {
    res.render('air/aquarius')
})

router.get('/libra', (req, res)=> {
    res.render('air/libra')
} )

module.exports = router