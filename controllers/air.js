
const express = require('express')

const router = express.Router()



router.get('/', (req, res) => {
    const element = 'air'
    const signs = ['aquarius', 'gemini', 'libra']
    const traits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easilt provoked']
    res.render('air.ejs', {traits: traits, signs:  signs, element: element})
})






router.get('/aquarius', (req, res) => {
    const element = 'air'
    const signs = ['aquarius', 'gemini', 'libra']
    const traits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easilt provoked']
    res.render('air.ejs', {traits: traits, signs:  signs, element: element})
})
router.get('/gemini', (req, res) => {
    const element = 'air'
    const signs = ['aquarius', 'gemini', 'libra']
    const traits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easilt provoked']
    res.render('air.ejs', {traits: traits, signs:  signs, element: element})
})
router.get('/libra', (req, res) => {
    const element = 'air'
    const signs = ['aquarius', 'gemini', 'libra']
    const traits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easilt provoked']
    res.render('air.ejs', {traits: traits, signs:  signs, element: element})
})
module.exports = router
