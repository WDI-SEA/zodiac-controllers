//make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router

router.get('/', (req, res) => {
	res.render('water.ejs', {
		element: 'Water',
		signs: ['Pisces', 'Cancer', 'Scorpio'],
		traits: ['private', 'mysterious', 'psychic', 'charming', 'emo', 'sensitive']	
	})
})



//export the router
module.exports = router