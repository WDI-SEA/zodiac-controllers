const express= require('express')
const router= express.Router()

// router.get('/water', (req,res)=>{
    // const water = ['cancer', 'scorpio', 'pisces']
    // res.render('../views/water', {elementWater: water})
//     res.render('elements/water')
// })
// router.get('/water', (req,res)=>{
//     // const water = ['cancer', 'scorpio', 'pisces']
//     // res.render('../views/water', {elementWater: water})
//     res.render('water/pisces')
// })
router.get('/water', (req,res)=>{
    const water = ['cancer', 'scorpio', 'pisces']
    res.render('../views/water', {elementWater: water})
    // res.render('water/scorpio')
})

module.exports = router