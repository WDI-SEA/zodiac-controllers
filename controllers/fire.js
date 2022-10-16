const express = require("express")
const router = express.Router()
router.get("/aries",(req,res)=>{
    const ariesImg= "https://static.vecteezy.com/system/resources/previews/003/758/707/original/zodiac-sign-aries-isolated-icon-zodiac-symbol-with-starry-gradient-design-astrological-element-vector.jpg"
    res.render("aries", {imgSrc: ariesImg})
})
router.get("/leo",(req,res)=>{
    const leoImg= "https://img.freepik.com/premium-vector/zodiac-sign-leo-isolated-vector-icon-zodiac-symbol-with-starry-gradient-design_502651-120.jpg?w=2000"
    res.render("leo", {imgSrc: leoImg})
})
router.get("/sagittarius",(req,res)=>{
    const satImg= "https://static.vecteezy.com/system/resources/previews/003/808/501/original/zodiac-sign-sagittarius-isolated-icon-zodiac-symbol-with-starry-gradient-design-astrological-element-vector.jpg"
    res.render("sagittarius", {imgSrc: satImg})
})
router.get("/", (req,res)=>{
    res.render("fire" , {signs:['Aries','Leo','Sagittarius'], content:["Passionate", "Strong emotions","Temperamental","Accomplished"]})
    })
module.exports = router