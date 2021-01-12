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
    image = 'https://www.placecage.com/g/200/300'
    res.render('index.ejs', {name: '', element: element, sign: signs, traits: zodiacTraits, src:''})
})

router.get('/taurus', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus.svg/60px-Taurus.svg.png'
    res.render('index.ejs', {name: 'Taurus', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/virgo', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Virgo.svg/60px-Virgo.svg.png'
    res.render('index.ejs', {name: 'Virgo', element: element, sign: signs, traits: zodiacTraits, src:image})
})

router.get('/capricorn', (req, res) => {
    image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/60px-Capricorn.svg.png'
    res.render('index.ejs', {name: 'Capricorn', element: element, sign: signs, traits: zodiacTraits, src:image})
})

module.exports = router