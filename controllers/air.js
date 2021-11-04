const express = require('express')
const router = express.Router()


router.get('/', (req,res) => {
    const airDes = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air/air', {airDescription: airDes})
})

router.get('/gemini', (req,res) => {
    res.render('air/gemini')
})

router.get('/libra', (req,res) => {
    res.render('air/libra')
})

router.get('/aquarius', (req,res) => {
    res.render('air/aquarius')
})


module.exports = router