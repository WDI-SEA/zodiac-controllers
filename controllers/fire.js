//make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router

router.get('/', (req, res) => {
	res.render('fire.ejs', {
		element: 'Fire',
		signs: ['Aries', 'Leo', 'Sagittarius'],
		traits: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']	
	})
})



//export the router
module.exports = router