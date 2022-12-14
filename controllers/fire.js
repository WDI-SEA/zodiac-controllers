const express = require('express')
const router = express.Router()
// router.get('/leo',function(req,res){
// res.render()
// })
// router.get('/aries',function(req,res){
// res.render()
// })
// router.get('/sagittarius',function(req,res){
// res.render()
// })
router.get('/fire',function(req,res){
    res.render('fire.ejs',{
        fireQualities: [ 'passionate','strong emotions','temperamental','energetic','accomplished','interesting']
    })
})

module.exports =router