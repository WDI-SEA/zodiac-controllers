const express = require('express')
const router = express.Router()

let waterSigns = ['Pisces', 'Cancer', 'Scorpio']
const signPaths = waterSigns.map((sign) => {
    return sign.toLowerCase()
})

router.get('/', (req, res) =>{
    let waterTraits = ['privite', 'mysterious', 'psyhic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {signs: waterSigns, traits: waterTraits})
})

router.get('/:sign', (req, res) => {
    if(signPaths.includes(req.params.sign)) {
        console.log(req.params.sign)
        res.send(`${req.params.sign}.ejs`, {
            sign: req.params.sign
        })
    } else {
        console.log('error404')
        res.sendStatus(404)
    }
    console.log(req.params.sign)
})

module.exports = router