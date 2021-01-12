const { sign } = require('crypto')
const express = require('express')
const router = express.Router()

let zodiacTraits = ['grounded', 
                    'helpful', 
                    'practical',
                    'realistic',
                    'materialistic',
                    'dependable']
                    
let element = 'Earth'

let signs = [{name: 'Taurus', link: '/earth/taurus'}, {name: 'Virgo', link: '/earth/virgo'}, {name: 'Capricorn', link: '/earth/capricorn'}]

let image

router.get('/earth', (req, res) => {
    image = '../images/earth.png'
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/taurus', (req, res) => {
    image = '../images/taurus.jpg'
    res.render('index.ejs', {name: 'Taurus', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/virgo', (req, res) => {
    image = '../images/virgo.jpg'
    res.render('index.ejs', {name: 'Virgo', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/capricorn', (req, res) => {
    image = '../images/capricorn.jpg'
    res.render('index.ejs', {name: 'Capricorn', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router