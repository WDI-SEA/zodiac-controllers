const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('water.ejs', {
        signs: ['Pisces', 'Cancer', 'Scorpio'],
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    });
});

router.get('/pisces', (req, res) => {
    res.render('pisces.ejs', {
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    });
});

router.get('/cancer', (req, res) => {
    res.render('cancer.ejs', {
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    });
});

router.get('/scorpio', (req, res) => {
    res.render('scorpio.ejs', {
        traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']
    });
});


module.exports = router;