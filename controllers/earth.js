const express = require('express')
const router = express.Router()

//routes goes here
router.get("/", (req,res)=>{
    // res.send("This is the earth sign Page!")
    res.render('earth.ejs',{earthTraits:['grounded','helpful','practical','realistic','materialistic','dependable']})
    
})

//taurus
router.get('/taurus', (req,res)=>{
    res.render('taurus.ejs')
})

//virgo
router.get('/virgo', (req,res)=>{
    res.render('virgo.ejs')
})

//capricorn
router.get('/capricorn', (req,res)=>{
    res.render('capricorn.ejs')
})



module.exports = router