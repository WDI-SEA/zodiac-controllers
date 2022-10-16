const express = require('express')
const router = express.Router()



router.get('/', (req,res)=>{
    res.render('water.ejs', {waterTraits: ['Private', 'Mysterious', 'Pychic', 'Charming', 'Emotional', 'Sensitive']})
})

router.get('/cancer', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-CANCER.png?w=750"
    const sign = 'cancer'
    res.render('images.ejs', {url, sign})
})

router.get('/scorpio', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2020/07/GettyImages-858080114-1.jpg?w=750"
    const sign = 'scorpio'
    res.render('images.ejs', {url, sign})
})

router.get('/pisces', (req,res)=>{
    const url = "https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-PISCES.png?w=750"
    const sign = 'pisces'
    res.render('images.ejs', {url, sign})
})

module.exports = router