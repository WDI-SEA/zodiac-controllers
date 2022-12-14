const express = require('express')
const router = express.Router()
// router.get('/cancer',function(req,res){
// res.render()
// })
// router.get('/scorpio',function(req,res){
// res.render()
// })
// router.get('/pisces',function(req,res){
// res.render()
// })
router.get('/water',function(req,res){
    res.render('water.ejs',{
        waterQualities: ['private','mysterious','pyschic','charming','emotional','sensitive']
    })
})
module.exports =router