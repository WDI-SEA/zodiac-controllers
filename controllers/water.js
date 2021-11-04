const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    let waterSigns = ["private", "mysterious", "psyhcic", "charming", "emotional", "sensitive"]
    res.render('water/water.ejs', {waterSigns})
})

router.get('/pisces', (req,res)=>{

    res.render('water/pisces.ejs')
})

router.get('/cancer', (req,res)=>{

    res.render('water/cancer.ejs')
})

router.get('/scorpio', (req,res)=>{

    es.render('water/scorpio.ejs')
})



module.exports = router;