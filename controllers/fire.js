const { sign } = require('crypto')
const express = require('express')
const router = express.Router()

let zodiacTraits = ['passionate', 
                    'strong emotions', 
                    'temperamental',
                    'energetic',
                    'accomplished',
                    'interesting']

let element = 'Fire'

let signs = [{name: 'Leo', link: '/fire/leo'}, {name: 'Aries', link: '/fire/aries'}, {name: 'Sagittarius', link: '/fire/sagittarius'}]

let image

router.get('/fire', (req, res) => {
    image = ''
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:''})
})

router.get('/leo', (req, res) => {
    image = '../images/leo.jpg'
    res.render('index.ejs', {name: 'Leo', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/aries', (req, res) => {
    image = '../images/aries.jpg'
    res.render('index.ejs', {name: 'Aries', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/sagittarius', (req, res) => {
    image = '../images/sagittarius.jpg'
    res.render('index.ejs', {name: 'Sagittarius', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router