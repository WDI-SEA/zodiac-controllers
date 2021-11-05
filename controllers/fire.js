const express = require('express')
const router = express.Router()

router.get('/fire', (req, res) => {
    // res.send('Fire')
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    const fireProps = ['Passionate', 'Strong Emotions', 'Temperamental', 'Energetic', 'Accomplished', 'Interesting']
    res.render('./fire/fire.ejs', {fireProps, fireSigns})
})

const fireSigns = ['Aries', 'Leo', 'Sagittarius']

router.get('/aries', (req, res) => {
    // res.send('Fire')
    const imgUrl = 'https://kbimages1-a.akamaihd.net/aa5fb02c-9ca6-4465-bc13-8f8d93e39533/353/569/90/False/aries-35.jpg'
    res.render('./fire/aries.ejs', {fireSigns, imgUrl})
})

router.get('/leo', (req, res) => {
    // res.send('Fire')
    const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/51UluTouiOL._SX310_BO1,204,203,200_.jpg'
    res.render('./fire/leo.ejs', {fireSigns, imgUrl})
})

router.get('/sagittarius', (req, res) => {
    // res.send('Fire')
    const imgUrl = 'https://kbimages1-a.akamaihd.net/15b0dafa-5d84-4d47-afb8-329c9de10969/353/569/90/False/sagittarius-19.jpg'
    res.render('./fire/sagittarius.ejs', {fireSigns, imgUrl})
})

module.exports = router