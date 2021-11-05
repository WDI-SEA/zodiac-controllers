const express= require('express')
const router= express.Router()

router.get('/fire', (req,res)=>{
    const fire = ['leo', 'aries', 'sagittarius']
    res.render('../views/fire', {elementFire: fire})
    // res.render('elements/aries', {})
})

// router.get('/fire', (req,res)=>{
//     // const fire = ['leo', 'aries', 'sagittarius']
//     // res.render('../views/fire', {elementFire: fire})
//     res.render('fire/leo')
// })
// router.get('/fire', (req,res)=>{
//     // const fire = ['leo', 'aries', 'sagittarius']
//     // res.render('../views/fire', {elementFire: fire})
//     res.render('fire/sagittarius')
// })

module.exports = router