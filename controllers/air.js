const express= require('express')
const router= express.Router()

// router.get('/air', (req,res)=>{
//     res.render('../views/elements/air.ejs')
//     console.log('working idk bro')
// })


// router.get('/air', (req,res)=>{
//     res.render('air/gemini.ejs')
// })

// router.get('/air', (req,res)=>{
//     res.render('air/libra.ejs')
// })
router.get('/air', (req,res)=>{
    const air = ['gemini', 'libra', 'aquarius']
    res.render('../views/air', {elementAir: air})
    // res.render('air/aquarius')
})

// router.get('/air', (req,res)=>{
//     // const air = ['gemini', 'libra', 'aquarius']
//     // res.render('../views/air', {elementAir: air})
//     res.render('air/gemini')  
// })

// router.get('/air', (req,res)=>{
//     // const air = ['gemini', 'libra', 'aquarius']
//     // res.render('../views/air', {elementAir: air})
//     res.render('air/libra')  
// })
module.exports = router