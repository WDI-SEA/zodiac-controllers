
const express = require('express')

const router = express.Router()


// WATER ROUTE
// list of water signs and relevant traits from the graphic above
router.get('/', (req, res) => {

    // res.send('Hello Water')


    res.render('water.ejs', 
    {
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })


})


router.get('/:zodiac', (req, res) => {

    let context = {}

    if(req.params.zodiac === 'cancer'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Cancer_symbol_%28bold%29.svg.png"
    
    } else if(req.params.zodiac === 'pisces'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pisces_symbol_%28bold%29.svg/1200px-Pisces_symbol_%28bold%29.svg.png"

    } else if(req.params.zodiac === 'scorpio'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Scorpius_symbol_%28bold%29.svg/800px-Scorpius_symbol_%28bold%29.svg.png"
    }
    
    res.render('img.ejs', context)
})





module.exports = router