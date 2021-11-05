const express = require('express')
const router = express.Router()

router.get('/aquarius', (req, res)=>{
    // const aquariusImage = 'https://metropolitangirls.com/wp-content/uploads/2019/03/aquarius-in-article.jpg'
    res.render('air/aquarius.ejs')
})

router.get('/gemini', (req, res)=>{
    res.render('air/gemini.ejs')
})

router.get('/libra', (req, res)=>{
    res.render('air/libra.ejs')
})

module.exports = router