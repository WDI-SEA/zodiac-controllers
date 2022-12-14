const express = require('express')
const router = express.Router()

router.get('/pisces', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Pisces'
    })
})

router.get('/cancer', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Cancer'
    })
})

router.get('/Scorpio', (request, response) => {
    response.render('./signs.ejs', {
        sign: 'Scorpio'
    })
})

//export the router
module.exports = router