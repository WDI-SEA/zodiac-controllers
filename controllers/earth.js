const express = require('express')
const router = express.Router()

router.get('/virgo', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Virgo'
    })
})

router.get('/taurus', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Taurus'
    })
})

router.get('/capricorn', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Capricorn'
    })
})

//export the router
module.exports = router