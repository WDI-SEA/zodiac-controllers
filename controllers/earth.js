const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('show', {name: 'earth', signs: ['taurus', 'virgo', 'capricorn'], traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']} )
})
router.get('/taurus', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Taurus_symbol_%28bold%29.svg/800px-Taurus_symbol_%28bold%29.svg.png'})
})
router.get('/virgo', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Virgo_symbol_%28bold%29.svg/1200px-Virgo_symbol_%28bold%29.svg.png'})
})
router.get('/capricorn', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Capricornus_symbol_%28bold%29.svg/1200px-Capricornus_symbol_%28bold%29.svg.png'})
})

module.exports = router;