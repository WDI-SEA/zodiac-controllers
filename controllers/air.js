const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('air', {
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    })
});

router.get('/aquarius', (req, res) => {
    res.render('aquarius', {
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    }) 
})

router.get('/gemini', (req, res) => {
    res.render('gemini', {
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    }) 
})

router.get('/libra', (req, res) => {
    res.render('libra', {
        traits: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked']
    }) 
})

module.exports = router;