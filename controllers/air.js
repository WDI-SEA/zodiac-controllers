const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('air.ejs', {
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'light', 'adventure', 'exciting', 'easily provoked']
    })
})

module.exports = router