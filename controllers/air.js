const express = require('express')
const router = express.Router()

//routes goes here

router.get("/", (req,res)=>{
    // res.send("This is the air sign Page!")
    res.render('air.ejs',{airTraits:['movement', 'creativity', 'action','adventure','exciting','easily provoked']})
    
})

//gemini
router.get('/gemini', (req,res)=>{
    res.render('gemini.ejs')
})

//libra
router.get('/libra', (req,res)=>{
    res.render('libra.ejs')
})

//aquarius
router.get('/aquarius', (req,res)=>{
    res.render('aquarius.ejs')
})

module.exports = router