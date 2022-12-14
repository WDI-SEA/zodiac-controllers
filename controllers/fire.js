const express = require('express')
const router = express.Router()

router.get('/aries', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Aries'
    })
})

router.get('/leo', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Leo'
    })
})

router.get('/sagittarius', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Sagittarius'
    })
})

//export the router
module.exports = router