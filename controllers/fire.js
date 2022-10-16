const express = require('express')
const router = express.Router()

//routes goes here

router.get("/", (req,res)=>{
    // res.send("This is the fire sign Page!")
    res.render('fire.ejs', {fireTraits:['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished','interesting']})
    
})

//leo
router.get('/leo', (req,res)=>{
    res.render('leo.ejs')
})

//aries
router.get('/aries', (req,res)=>{
    res.render('aries.ejs')
})

//sagittarius
router.get('/sagittarius', (req,res)=>{
    res.render('sagittarius.ejs')
})

module.exports = router