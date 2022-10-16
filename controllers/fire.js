const express = require('express')

const router = express.Router()


// FIRE ROUTE
// list of fire signs and relevant traits from the graphic above
router.get('/', (req, res) => {
    // res.send('Hello Fire')


    res.render('fire.ejs', 
    {
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})


router.get('/:zodiac', (req, res) => {

    let context = {}

    if(req.params.zodiac === 'leo'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Leo_symbol_%28bold%29.svg/1200px-Leo_symbol_%28bold%29.svg.png"
    
    } else if(req.params.zodiac === 'aries'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Aries_symbol_%28bold%29.svg/1200px-Aries_symbol_%28bold%29.svg.png"

    } else if(req.params.zodiac === 'sagittarius'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sagittarius_symbol_%28bold%29.svg/1200px-Sagittarius_symbol_%28bold%29.svg.png"
    }
    
    res.render('img.ejs', context)
})



module.exports = router