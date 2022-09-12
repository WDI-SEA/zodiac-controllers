const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('show', {name: 'air', signs: ['aquarius', 'gemini', 'libra'], traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']} )
})

router.get('/gemini', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gemini_symbol_%28bold%29.svg/800px-Gemini_symbol_%28bold%29.svg.png'})
})
router.get('/libra', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Libra_symbol_%28bold%29.svg.png'})
})
router.get('/aquarius', (req, res) => {
    res.render('image', {link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Aquarius_symbol_%28bold%29.svg.png'})
})

module.exports = router;