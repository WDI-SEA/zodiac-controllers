const express = require("express")
const router = express.Router()
router.get("/cancer",(req,res)=>{
    const cancerImg= "https://img.freepik.com/premium-vector/zodiac-sign-cancer-isolated-vector-icon-zodiac-symbol-with-starry-gradient-design_502651-118.jpg?w=2000"
    res.render("cancer", {imgSrc: cancerImg})
})
router.get("/pisces",(req,res)=>{
    const piscesImg= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4HwzM-3URW8lX0RHNuRIAFtk-R2X1GKBsuw&usqp=CAU"
    res.render("pisces", {imgSrc: piscesImg})
})
router.get("/scorpio",(req,res)=>{
    const scorImg= "https://cdn1.vectorstock.com/i/1000x1000/68/75/zodiac-sign-scorpio-vector-9276875.jpg"
    res.render("scorpio", {imgSrc: scorImg})
})
router.get("/", (req,res)=>{
    res.render("water" , {signs:['Cancer','Scorpio','Pisces'], content:["Charming","Emotional","Private","Mysterious"]})
})
module.exports = router