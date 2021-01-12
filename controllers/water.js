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
    image = 'https://www.placecage.com/g/200/300'
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:''})
})

router.get('/cancer', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cancer.svg/60px-Cancer.svg.png'
    res.render('index.ejs', {name: 'Cancer', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/scorpio', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Scorpio.svg/60px-Scorpio.svg.png'
    res.render('index.ejs', {name: 'Scorpio', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/pisces', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pisces.svg/60px-Pisces.svg.png'
    res.render('index.ejs', {name: 'Pisces', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router