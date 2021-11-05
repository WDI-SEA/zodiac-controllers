const express = require('express')
const router = express.Router()

router.get('/air', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const airProps = ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    res.render('./air/air.ejs', {airProps, airSigns})
})

router.get('/aquarius', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const imgUrl = 'https://kbimages1-a.akamaihd.net/f296877f-4a01-4ff7-8e55-e56fdc683910/1200/1200/False/aquarius-23.jpg'
    res.render('./air/aquarius.ejs', {airSigns, imgUrl})
})

router.get('/gemini', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const imgUrl = 'https://m.media-amazon.com/images/I/41L1QLcESSL.jpg'
    res.render('./air/gemini.ejs', {airSigns, imgUrl})
})

router.get('/libra', (req, res) => {
    const airSigns = ['Aquarius', 'Gemini', 'Libra']
    const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/51Gv6EX6wKL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
    res.render('./air/libra.ejs', {airSigns, imgUrl})
})

module.exports = router