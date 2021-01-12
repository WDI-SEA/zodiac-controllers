const { sign } = require('crypto')
const express = require('express')
const router = express.Router()

let zodiacTraits = ['movement', 
                    'creativity', 
                    'action',
                    'adventure',
                    'exciting',
                    'easily provoked']

let element = 'Air'

let signs = [{name: 'Gemini', link: '/air/gemini'}, {name: 'Libra', link: '/air/libra'}, {name: 'Aquarius', link: '/air/aquarius'}]

let image

router.get('/air', (req, res) => {
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:''})
})

router.get('/aquarius', (req, res) => {
    image = '../images/aquarius.jpg'
    res.render('index.ejs', {name: 'Aquarius', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/libra', (req, res) => {
    image = '../images/libra.jpg'
    res.render('index.ejs', {name: 'Libra', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/gemini', (req, res) => {
    image = '../images/gemini.jpg'
    res.render('index.ejs', {name: 'Gemini', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router