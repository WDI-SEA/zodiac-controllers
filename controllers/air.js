//make an instance of express router
const express = require('express')
const router = express.Router()

//mount your routes on the router
router.get('/', (req, res) => {
	res.render('air.ejs', {
		element: 'Air',
		signs: ['Aquarius', 'Gemini', 'Libra'],
		traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']	
	})
})


//export the router
module.exports = router