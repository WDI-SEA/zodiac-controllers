const express = require('express')
const router = express.Router()
// router.get('/gemini',function(req,res){
// res.render('air.ejs',{
//     zodiacSigns: []
// })
// })
// router.get('/libra',function(req,res){
// res.render('air.ejs',{
//     zodiacSigns: []
// })
// })
// router.get('/aquarius',function(req,res){
// res.render('air.ejs',{
//     zodiacSigns: []
// })
// })

router.get('/air',function(req,res){
    res.render('air.ejs',{
        airQualities: ['movement','creativity','action','adventure','exciting']
    })
})


module.exports =router