const express=require('express')
const router=express.Router()
let imgPath

//router.use(layouts)
router.get('/gemini',(req,res)=>{
    imgPath='/img/astrology.png'
    console.log(imgPath)
    res.render('secondElementDisplay.ejs',{path:imgPath,sign:"gemini"})
})
router.get('/libra',(req,res)=>{
    imgPath='/img/depositphotos.jpg'
    res.render('secondElementDisplay.ejs',{path:imgPath,sign:"libra"})
})
router.get('/aquarius',(req,res)=>{
    imgPath='/img/aquarius.jpg.webp'
    res.render('secondElementDisplay.ejs',{path:imgPath,sign:"aquarius"})
})
module.exports=router