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
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Leo.svg/60px-Leo.svg.png'
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:''})
})

router.get('/leo', (req, res) => {
    image = 'https://www.placecage.com/g/200/300'
    res.render('index.ejs', {name: 'Leo', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/aries', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/60px-Aries.svg.png'
    res.render('index.ejs', {name: 'Aries', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/sagittarius', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sagittarius.svg/60px-Sagittarius.svg.png'
    res.render('index.ejs', {name: 'Sagittarius', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router