const express = require('express')
const router = express.Router()

const waterSigns = ['Pisces', 'Cancer', 'Scorpio']

router.get('/water', (req, res) => {
    // res.send('Water')
    const waterProps = ['Private', 'Mysterious', 'Charming', 'Emotional', 'Sensitive']
    res.render('./water/water.ejs', {waterProps, waterSigns})
})

router.get('/pisces', (req, res) => {
    // res.send('Water')
    const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/41tUNhqsy5L._SY344_BO1,204,203,200_QL70_ML2_.jpg'
    res.render('./water/pisces.ejs', {waterSigns, imgUrl})
})

router.get('/cancer', (req, res) => {
    // res.send('Water')
    const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/41u9xPaKCmL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
    res.render('./water/cancer.ejs', {waterSigns, imgUrl})
})

router.get('/scorpio', (req, res) => {
    // res.send('Water')
    const imgUrl = 'https://kbimages1-a.akamaihd.net/7fbb8b6c-234a-4cca-9c4b-007c072e9f64/353/569/90/False/scorpio-23.jpg'
    res.render('./water/scorpio.ejs', {waterSigns, imgUrl})
})


module.exports = router