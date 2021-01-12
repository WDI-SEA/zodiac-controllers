const { sign } = require('crypto')
const express = require('express')
const router = express.Router()

let zodiacTraits = ['private', 
                    'mysterious', 
                    'psychic',
                    'charming',
                    'emotional',
                    'sensitive']

let element = 'Water'

let signs = [{name: 'Cancer', link: '/water/cancer'}, {name: 'Scorpio', link: '/water/scorpio'}, {name: 'Pisces', link: '/water/pisces'}]

let image

router.get('/water', (req, res) => {
    image = '../images/water.png'
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/cancer', (req, res) => {
    image = '../images/cancer.jpg'
    res.render('index.ejs', {name: 'Cancer', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/scorpio', (req, res) => {
    image = '../images/scorpio.jpg'
    res.render('index.ejs', {name: 'Scorpio', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/pisces', (req, res) => {
    image = '../images/pisces.jpg'
    res.render('index.ejs', {name: 'Pisces', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router