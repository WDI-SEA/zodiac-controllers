const express= require('express')
const router= express.Router()


router.get('/', (req,res)=>{
    res.render('water.ejs')
})

module.exports = router