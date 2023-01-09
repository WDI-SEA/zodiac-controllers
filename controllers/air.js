const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('air.ejs', {
        element: 'Air 🌬',
        urlPrefix: 'air',
        signs: ['Aquarius', 'Gemini', 'Libra'],
        traits: ['movement', 'creativity', 'light', 'adventure', 'exciting', 'easily provoked']
    })
})

router.get('/aquarius', (req, res) => {
    res.render('air/aquarius', { sign: 'aquarius' })
  })
  
  router.get('/gemini', (req, res) => {
    res.render('air/gemini', { sign: 'gemini' })
  })
  
  router.get('/libra', (req, res) => {
    res.render('air/libra', { sign: 'libra' })
  })

module.exports = router