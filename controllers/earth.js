const express = require('express')
const router = express.Router()

let earthSigns = ['Taurus', 'Virgo', 'Capricorn']
const signPaths = earthSigns.map((sign) => {
    return sign.toLocaleLowerCase()
})

router.get('/', (req, res) =>{
    let earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materalistic', 'dependable']
    res.render('earth.ejs', {signs: earthSigns, traits: earthTraits})
    res.render('earth.ejs', {sign: elementDisplay})
})

router.get('/:sign', (req, res) => {
    if(signPaths.includes(req.params.sign)) {
        console.log(req.params.sign)
        res.render(`${req.params.sign}.ejs`, {
            sign: req.params.sign
        })
    } else {
        console.log('error404')
        res.sendStatus(404)
    }
    console.log(req.params.sign)
})

module.exports = router