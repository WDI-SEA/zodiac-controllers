// import express
// create an express router
const express = require('express')
const router = express.Router()

// mount routes on router
// air route
router.get('/', (req, res)=>{
    // res.send('this is the air page')
    // airTraits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('air.ejs', {
        element: 'air',
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting']
    })
})

router.get('/aquarius', (req, res)=>{
    res.render('partials/sign.ejs', { sign: "aquarius"})
    // res.send('hello')
})
router.get('/gemini', (req, res)=>{
    res.send('gemini')
})
router.get('/libra', (req, res)=>{
    res.send('libra')
})

// export the router
module.exports = router