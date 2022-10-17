//import express
const express = require ('express')
const router = express.Router()


//water route
router.get("/", (req,res)=>{
    // res.send('This is the water Page 🌊!')
    res.render('water.ejs',{WaterTraits : ['Private','Mysterious','Psyshic','Charming','Emotional','Sensitive']})
})

module.exports = router;
