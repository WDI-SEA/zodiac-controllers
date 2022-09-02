const express = require('express')
const router = express.Router()

const elements = {
    air: {
        name: "air",
        signs: ['aquarius', 'geminin', 'libra'],
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    },
}

// router.get('/', (req, res) => {
//     // res.send('This is my AIR page')
//     // res.render('air')
//     // res.json(elements.air)
//     res.render('show', {element: elements.air})
// })

router.get('/gemini', (req, res) => {
    res.render('air/gemini')
})

module.exports = router