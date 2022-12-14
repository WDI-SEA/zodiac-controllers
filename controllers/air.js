// make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router

router.get('/', (req,res) => {
    // res.send('air works!')
    res.render('air.ejs', {
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})

router.get('/gemini', (req, res) => {
    res.render('gemini.ejs')
})

router.get('/libra', (req, res) => {
    res.render('libra.ejs')
})

router.get('/aquarius', (req, res) => {
    res.render('aquarius.ejs')
})

module.exports = router