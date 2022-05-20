
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    const element = 'earth'
    const signs = ['taurus', 'virgo', 'capricorn']
    const traits = ['grounded', 'helpful', 'practicul', 'realistic', 'materialistic', 'dependable']
    res.render('fire.ejs', {traits: traits, signs:  signs, element: element})
})




router.get('/taurus', (req, res) => {
    const element = 'earth'
    const signs = ['taurus', 'virgo', 'capricorn']
    const traits = ['grounded', 'helpful', 'practicul', 'realistic', 'materialistic', 'dependable']
    res.send('taurus')
})

router.get('/virgo', (req, res) => {
    const element = 'earth'
    const signs = ['taurus', 'virgo', 'capricorn']
    const traits = ['grounded', 'helpful', 'practicul', 'realistic', 'materialistic', 'dependable']
    res.send('virgo')
})

router.get('/capricorn', (req, res) => {
    const element = 'earth'
    const signs = ['taurus', 'virgo', 'capricorn']
    const traits = ['grounded', 'helpful', 'practicul', 'realistic', 'materialistic', 'dependable']
    res.send('capricorn')
})
module.exports = router
