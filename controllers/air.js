const express = require('express')
const router = express.Router()
const elements = {
    air:{
        signs: ['aquarius','gemini','libra'],
        traits:['movement','creativity','action']
    },
    water:{
        signs: ['pisces','cancer','scorpio'],
        traits: ['private','mysterious','pyshic']
    },
    fire:{
        signs: ['aries','leo','sagittarius'],
        traits: ['passionate','strong','tempermental']
    },
    earth:{
        signs:['taurus','virgo','capricorn'],
        traits:['grounded','helpful','practical']
    }
}
router.get('/',function(req,res){
    const signs = elements.air.signs
    const traits = elements.air.traits
    res.render('show.ejs', {signs:signs, traits:traits, element: 'air'})
})
router.get('/:sign',function(req,res){
    //res.send(req.params.sign)
    const symbol = req.params.sign
    res.render('sign.ejs',{symbol: req.params.sign})
})
module.exports =router
// router.get('/gemini',function(req,res){
// res.render('air.ejs',{
//     zodiacSigns: []
// })
// })
// router.get('/libra',function(req,res){
// res.render('air.ejs',{
//     zodiacSigns: []
// })
// })
// router.get('/aquarius',function(req,res){
// res.render('air.ejs',{
//     zodiacSigns: []
// })
// })

// router.get('/air',function(req,res){
//     res.render('air.ejs',{
//         airQualities: ['movement','creativity','action','adventure','exciting']
//     })
// })

