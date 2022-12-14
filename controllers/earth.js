//make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router

router.get('/', (req, res) => {
	res.render('earth.ejs', {
		element: 'Earth',
		signs: ['Taurus', 'Virgo', 'Capricorn'],
		traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']	
	})
})



//export the router
module.exports = router