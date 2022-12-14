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
    const signs = elements.earth.signs
    const traits = elements.earth.traits
    res.render('show.ejs', {signs:signs, traits:traits, element: 'earth'})
})
router.get('/:sign',function(req,res){
    //res.send(req.params.sign)
    const symbol = req.params.sign

    res.render('sign.ejs',{symbol: req.params.sign})
})
// router.get('/taurus',function(req,res){
// res.render()
// })
// router.get('/virgo',function(req,res){
// res.render()
// })
// router.get('/capricorn',function(req,res){
// res.render()
// })
// router.get('/earth',function(req,res){
//     res.render('earth.ejs',{
//         earthQualities: [ 'grounded','helpful','practical','realistic','materialistic','dependable']
//     })
// })

module.exports =router