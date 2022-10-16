const express = require('express')

const router = express.Router()



// EARTH ROUTE
// list of earth sign and relevant traits from the graphic above
router.get('/', (req, res) => {
    // res.send('Hello Earth')


    res.render('earth.ejs', 
    {
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})



router.get('/:zodiac', (req, res) => {

    let context = {}

    if(req.params.zodiac === 'capricorn'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cancer_symbol_%28bold%29.svg/1200px-Cancer_symbol_%28bold%29.svg.png"
    
    } else if(req.params.zodiac === 'taurus'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Taurus_symbol_%28bold%29.svg/1200px-Taurus_symbol_%28bold%29.svg.png"

    } else if(req.params.zodiac === 'virgo'){
        context.url = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Virgo_symbol_%28bold%29.svg/1200px-Virgo_symbol_%28bold%29.svg.png"
    }
    
    res.render('img.ejs', context)
})




module.exports = router