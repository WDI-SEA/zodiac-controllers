const e = require('express')
const express = require('express')

const router = express.Router()


// AIR ROUTE
// list of air signs and relevant traits from the graphic above
router.get('/', (req, res) => {
    // res.send('Hello Air')


    res.render('air.ejs', 
    {
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})


router.get('/:zodiac', (req, res) => {

    let context = {}

    if(req.params.zodiac === 'gemini'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gemini_symbol_%28bold%29.svg/1200px-Gemini_symbol_%28bold%29.svg.png"
    
    } else if(req.params.zodiac === 'libra'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Libra_symbol_%28bold%29.svg/1200px-Libra_symbol_%28bold%29.svg.png"

    } else if(req.params.zodiac === 'aquarius'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Aquarius_symbol_%28bold%29.svg/1200px-Aquarius_symbol_%28bold%29.svg.png"
    }
    
    res.render('img.ejs', context)
})



module.exports = router