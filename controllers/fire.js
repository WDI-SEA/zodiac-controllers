const express = require('express')
const router = express.Router()


router.get('/home', (req,res)=>{
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    res.render('fire/home.ejs', {fire, fireSigns})
})

router.get('/Aries', (req,res)=>{
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    res.render('fire/aries.ejs', {fire, fireSigns})
})

router.get('/Leo', (req,res)=>{
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    res.render('fire/Leo.ejs', {fire, fireSigns})
})

router.get('/Sagittarius', (req,res)=>{
    const fire = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    const fireSigns = ['Aries', 'Leo', 'Sagittarius']
    res.render('fire/Sagittarius.ejs', {fire, fireSigns})
})

module.exports = router