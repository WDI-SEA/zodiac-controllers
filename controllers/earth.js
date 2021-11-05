const express = require('express')
const router = express.Router()

const earthSigns = ['Taurus', 'Virgo', 'Capricorn']

router.get('/earth', (req, res) => {
    // res.send('earth')
    const earthProps = ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
    res.render('./earth/earth.ejs', {earthProps, earthSigns})
})

router.get('/capricorn', (req, res) => {
    // res.send('earth')
    const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/51bkunwHcxL._SY344_BO1,204,203,200_QL70_ML2_.jpg'
    res.render('./earth/capricorn.ejs', {earthSigns, imgUrl})
})

router.get('/taurus', (req, res) => {
    // res.send('earth')
    const imgUrl = 'https://kbimages1-a.akamaihd.net/9ac37100-89f2-4cb9-ad69-cbe5aec15ee5/353/569/90/False/taurus-28.jpg'
    res.render('./earth/taurus.ejs', {earthSigns, imgUrl})
})

router.get('/virgo', (req, res) => {
    // res.send('earth')
    const imgUrl = 'https://kbimages1-a.akamaihd.net/8188b582-83ec-4e5f-9bb1-627dc5de8d5a/353/569/90/False/virgo-27.jpg'
    res.render('./earth/virgo.ejs', {earthSigns, imgUrl})
})

module.exports = router