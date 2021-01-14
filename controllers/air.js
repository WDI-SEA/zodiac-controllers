const express = require('express')
const router = express.Router()

let airSigns = ['Aquarius', 'Gemini', 'Libra']
const signPaths = airSigns.map((sign) => {
    return sign.toLowerCase()
})

router.get('/', (req, res) =>{
    let airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easly provoked']
    res.render('air.ejs', {signs: airSigns, traits: airTraits})
    res.render('air.ejs', {sign: elementDisplay})
})

router.get('/:sign', (req, res) => {
    console.log(signPaths)
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