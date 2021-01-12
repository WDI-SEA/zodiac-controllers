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
    image = 'https://www.placecage.com/g/200/300'
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:''})
})

router.get('/aquarius', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Aquarius.svg/60px-Aquarius.svg.png'
    res.render('index.ejs', {name: 'Aquarius', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/libra', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Libra.svg/60px-Libra.svg.png'
    res.render('index.ejs', {name: 'Libra', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/gemini', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gemini.svg/60px-Gemini.svg.png'
    res.render('index.ejs', {name: 'Gemini', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router