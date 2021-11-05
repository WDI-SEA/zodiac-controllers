const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    const airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {airTraits: airTraits})
})

router.get('/gemini', (req, res) => {
    res.render('air/gemini.ejs')
})

router.get('/aquarius', (req, res) => {
    res.render('air/aquarius.ejs')
})

router.get('/libra', (req, res) => {
    res.render('air/libra.ejs')
})

// export all routes in this file
module.exports = router