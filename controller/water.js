
const express = require('express')
const router = express.Router()
const signs = ['Pisces', 'Aquarius', 'Gemini']

router.get('/', (req,res) => {
    res.render('water.ejs', {signsList: signs})
})

router.get('/Pisces', (req,res) => {
    const url = 'https://www.wikihow.com/images/thumb/8/82/Pisces-Zodiac-Sign-Step-1-Version-2.jpg/v4-460px-Pisces-Zodiac-Sign-Step-1-Version-2.jpg'

    res.render('image.ejs', {url: url})
})

router.get('/Aquarius', (req,res) => {
    const url = 'https://askastrology.com/wp-content/uploads/2020/07/aquarius_astrology_sign.jpg'
    res.render('image.ejs', {url: url})
})





module.exports = router;