const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('show', {name: 'water', signs: ['cancer', 'scorpio', 'pisces'], traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']} )
})
router.get('/cancer', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Cancer_symbol_%28bold%29.svg.png'})
})
router.get('/scorpio', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Scorpius_symbol_%28bold%29.svg/800px-Scorpius_symbol_%28bold%29.svg.png'})
})
router.get('/pisces', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pisces_symbol_%28bold%29.svg/1200px-Pisces_symbol_%28bold%29.svg.png'})
})

module.exports = router;