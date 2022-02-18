const express = require('express');
const router = express.Router();

router.get('/aquarius', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'aquarius' });
});

router.get('/gemini', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'gemini' });
});

router.get('/libra', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'libra' });
});

module.exports = router;
