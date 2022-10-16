const express = require('express')
const router = express.Router()

//routes goes here


router.get("/", (req,res)=>{
    // res.send("This is the water sign Page!")
    res.render('water.ejs',{waterTraits:['private','mysterious','psyshic', 'charming','emotional','sensitive']})
    
})

//cancer
router.get('/cancer', (req,res)=>{
    res.render('cancer.ejs')
})

//scorpio
router.get('/scorpio', (req,res)=>{
    res.render('scorpio.ejs')
})

//pisces
router.get('/pisces', (req,res)=>{
    res.render('pisces.ejs')
})



module.exports = router