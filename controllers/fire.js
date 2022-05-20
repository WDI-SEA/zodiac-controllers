const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    const element = 'fire'
    const signs = ['aires',' leo', 'saggitarius']
    const traits = ['passionate', 'strong emotional', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {traits: traits, signs:  signs, element: element})
})











router.get('/aires', (req, res) => {
    const element = 'fire'
    const signs = ['aires',' leo', 'saggitarius']
    const traits = ['passionate', 'strong emotional', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.send('pisces')
})
router.get('/leo', (req, res) => {
    const element = 'fire'
    const signs = ['aires',' leo', 'saggitarius']
    const traits = ['passionate', 'strong emotional', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {traits: traits, signs:  signs, element: element})
})
router.get('/saggitarius', (req, res) => {
    const element = 'fire'
    const signs = ['aires',' leo', 'saggitarius']
    const traits = ['passionate', 'strong emotional', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {traits: traits, signs:  signs, element: element})
})
module.exports = router
