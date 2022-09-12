const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('show', {name: 'fire', signs: ['leo', 'aries', 'sagittarius'], traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']} )
})

router.get('/leo', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Leo_symbol_%28bold%29.svg/1200px-Leo_symbol_%28bold%29.svg.png'})
})
router.get('/aries', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Aries_symbol_%28bold%29.svg/1200px-Aries_symbol_%28bold%29.svg.png'})
})
router.get('/sagittarius', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sagittarius_symbol_%28bold%29.svg/1200px-Sagittarius_symbol_%28bold%29.svg.png'})
})

module.exports = router;