const express= require('express')
const router= express.Router()

router.get('/earth', (req,res)=>{
    const earth = ['taurus', 'virgo', 'capricorn']
    res.render('../views/earth', {elementEarth: earth})
    // res.render('elements/earth.ejs')
})
// router.get('/earth', (req,res)=>{
//     // const air = ['gemini', 'libra', 'aquarius']
//     // res.render('../views/air', {elementAir: air})
//     res.render('earth/taurus')  
// })

// router.get('/earth', (req,res)=>{
//     // const air = ['gemini', 'libra', 'aquarius']
//     // res.render('../views/air', {elementAir: air})
//     res.render('earth/virgo')  
// })
module.exports = router