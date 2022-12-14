const express = require('express')
const router = express.Router()
// router.get('/taurus',function(req,res){
// res.render()
// })
// router.get('/virgo',function(req,res){
// res.render()
// })
// router.get('/capricorn',function(req,res){
// res.render()
// })
router.get('/earth',function(req,res){
    res.render('earth.ejs',{
        earthQualities: [ 'grounded','helpful','practical','realistic','materialistic','dependable']
    })
})

module.exports =router