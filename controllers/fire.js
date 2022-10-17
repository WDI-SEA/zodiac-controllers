//import express
const express = require ('express')
const router = express.Router()


//fire route
router.get("/", (req,res)=>{
    // res.send('This is the fire Page 🔥!')
    res.render('fire.ejs',{FireTraits : ['Passionate','Strong emotions','Temperamental','Energetic','Accomplished','Interesting']})
})


module.exports = router;