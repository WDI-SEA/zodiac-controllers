const { render } = require('ejs')
const express = require('express')
const router = express.Router()

let fireSigns = ['Aries', 'Leo', 'Sagittarius']
const firePaths = fireSigns.map((sign) => {
    return sign.toLowerCase()
})

router.get('/', (req, res) =>{
    let fireTraits = ['passionate', 'strong emotions', 'temperanmetal', 'eneregetic', 'accomplished', 'interesting']
    res.render('elementDisplay', {signs: fireSigns, traits: fireTraits})
})

router.get('/:sign', (req, res) => {
    if(firePaths.includes(req.params.sign)) {
        console.log(req.params.sign)
        res.send(req.params.sign)
    } else {
        console.log('error404')
        res.sendStatus(404)
    }
    console.log(req.params.sign)
})

module.exports = router