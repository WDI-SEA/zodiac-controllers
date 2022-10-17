//import express
const express = require ('express')
const router = express.Router()


//earth route
router.get("/", (req,res)=>{
    // res.send('This is the earth Page 🌏!')
    res.render('earth.ejs',{EarthTraits : ['Grounded','Helpdul','Praetical','Realistic','Materialistic','Dependsble']})
})

module.exports = router;
