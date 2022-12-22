const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('water.ejs', {
		element: 'Water',
		signs: ['Pisces', 'Cancer', 'Scorpio'],
		traits: ['private', 'mysterious', 'psychic', 'charming', 'emo', 'sensitive']	
	})
})

router.get('/cancer', (req, res) => {
	res.render('partials/sign.ejs', { sign: 'cancer' })
})

router.get('/scorpio', (req, res) => {
	res.render('partials/sign.ejs', { sign: 'scorpio' })
})

router.get('/pisces', (req, res) => {
	res.render('partials/sign.ejs', { sign: 'pisces' })
})

module.exports = router