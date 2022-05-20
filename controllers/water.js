const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    const element = 'water'
    const signs = ['pisces', 'cancer', 'scorpio']
    const traits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {traits: traits, signs:  signs, element: element})
})










router.get('/pisces', (req, res) => {
    // const element = 'water'
    // const signs = ['pisces', 'cancer', 'scorpio']
    // const traits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    //res.send('pisces')
    res.render('partials/sign.ejs', {sign: 'pisces'})
})
router.get('/cancer', (req, res) => {
    // const element = 'water'
    // const signs = ['pisces', 'cancer', 'scorpio']
    // const traits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('partials/sign.ejs', {sign: 'cancer'})
})
router.get('/scorpio', (req, res) => {
    // const element = 'water'
    // const signs = ['pisces', 'cancer', 'scorpio']
    // const traits = ['private', 'mysterious', 'pyshic', 'charming', 'emotional', 'sensitive']
    res.render('partials/sign.ejs', {sign: 'scorpio'})
})
module.exports = router
