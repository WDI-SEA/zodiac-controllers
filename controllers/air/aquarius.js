const express = require('express')
const router = express.Router()

router.get('/air',function(req,res){
    res.render('air.ejs',{
 
        airQualities: ['movement','creativity','action','adventure','exciting']
    })
})


module.exports =router