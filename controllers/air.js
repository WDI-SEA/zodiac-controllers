//import express
const express = require ('express')
const router = express.Router()

//air route
router.get("/", (req,res)=>{
    // res.send('This is the air Page 🌬!')
    res.render('air.ejs',{AirTraits : ['Movement','Creativity','Action','Adventure','Exciting','Easily Provoked']})
})

module.exports = router;
