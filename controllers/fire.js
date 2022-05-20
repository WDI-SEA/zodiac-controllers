// import express
// create an express router
const express = require('express')
const router = express.Router()

// fire route
router.get('/fire', (req, res)=>{
    // res.send('this is the fire page')
    const fire = ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']
    res.render('fire.ejs', {fire})
})

// export the router
module.exports = router