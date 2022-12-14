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
    //res.send(elements.water.traits)
   const signs = elements.water.signs
   const traits = elements.water.traits
    res.render('show.ejs', {signs:signs, traits:traits, element: 'water'})
})
router.get('/:sign',function(req,res){
    //res.send(req.params.sign)
    const symbol = req.params.sign

    res.render('sign.ejs',{symbol: req.params.sign})
})
// router.get('/cancer',function(req,res){
// res.render()
// })
// router.get('/scorpio',function(req,res){
// res.render()
// })
// router.get('/pisces',function(req,res){
// res.render()
// })
// router.get('/water',function(req,res){
//     res.render('water.ejs',{
//         waterQualities: ['private','mysterious','pyschic','charming','emotional','sensitive']
//     })
// })
module.exports =router