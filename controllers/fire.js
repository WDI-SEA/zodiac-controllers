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
    const signs = elements.fire.signs
    const traits = elements.fire.traits
    res.render('show.ejs', {signs:signs, traits:traits, element: 'fire'})
})
router.get('/:sign',function(req,res){
    //res.send(req.params.sign)
    const symbol = req.params.sign

    res.render('sign.ejs',{symbol: req.params.sign})
})
// router.get('/leo',function(req,res){
// res.render()
// })
// router.get('/aries',function(req,res){
// res.render()
// })
// router.get('/sagittarius',function(req,res){
// res.render()
// })
// router.get('/fire',function(req,res){
//     res.render('fire.ejs',{
//         fireQualities: [ 'passionate','strong emotions','temperamental','energetic','accomplished','interesting']
//     })
// })

module.exports =router