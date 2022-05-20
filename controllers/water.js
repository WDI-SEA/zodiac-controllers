// import express
// create an express router
const express = require('express')
const router = express.Router()

// water route
router.get('/water', (req, res)=>{
    // res.send('this is the water page')
    const water = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    res.render('water.ejs', {water})
})

// export the router
module.exports = router
