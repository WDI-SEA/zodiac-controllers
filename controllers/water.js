const express = require('express')
const router = express.Router()
const waterSigns = ["Pisces", "Cancer", "Scorpio"]
const waterThings = ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']


router.get('/', (req, res) => {
    res.render('water', {waterSigns, waterThings})
}) 
router.get('./pisces', (req, res) => {
    res.render('sign.ejs', {waterSigns: pisces})
}) 
router.get('/cancer', (req, res) => {
    res.render('water/cancer', {water: signs[1], attibutes})
}) 
router.get('/cancer', (req, res) => {
    res.render('water/scorpio', {water: signs[2], attibutes})
}) 

module.exports = router