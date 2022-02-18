const express = require('express');
const router = express.Router();

router.get('/taurus', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'taurus' });
});

router.get('/virgo', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'virgo' });
});

router.get('/capricorn', (req, res) => {
	res.render('../partials/sign.ejs', { sign: 'capricorn' });
});

module.exports = router;
