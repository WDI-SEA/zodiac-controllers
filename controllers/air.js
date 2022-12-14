const express = require('express')
const router = express.Router()

router.get('/aquarius', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Aquarius'
    })
})

router.get('/gemini', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Gemini'
    })
})

router.get('/libra', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Libra'
    })
})

//export the router
module.exports = router