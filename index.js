
// import express
const express = require('express')
// create an instance of express
const app = express()

// import ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// MIDDLEWARE
// tell express to use ejs
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// do some middleware stuff
// once done, invoke next go to the next route/middleware
// ----------> ROUTES (aka ACTIONS) <----------

// HOME
// app is an objget is a function
// express hears incomiing request from client and do call back function
// anonymous function get using dot notation supplies to for callback function
app.get('/', (req, res)=>{
    res.render('index.ejs')
})

// WATER ROUTE
app.get('/water', (req, res)=>{
    // list of water signs and relevant traits from the graphic above
    res.render('water.ejs', {water: ['cancer', 'scorpio', 'pisces'],
traits:['private', 'mysterious', 'pyschic', 'charming', 'emotional', 'sensitive']})
})

// AIR ROUTE
app.get('/air', (req, res)=>{
    // list of air signs and relevant traits from the graphic above
    res.render('air.ejs', {air: ['libra', 'acquarius', 'gemini'],
    traits:['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})

})

// FIRE ROUTE
app.get('/fire', (req, res)=>{
    // 	list of fire signs and relevant traits from the graphic above
    res.render('fire.ejs', {fire: ['leo', 'aries', 'sagittarius'],
    traits: ['passionate', 'strong emotion', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})


// EARTH ROUTE
app.get('/earth', (req, res)=>{
    // list of earth sign and relevant traits from the graphic above
    res.render('earth.ejs', {earth: ['taurus', 'virgo', 'capricorn'],
traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})
// vary very last middleware

// // /water/cancer route
// app.get('/water/cancer', (req, res)=>{
//     res.render('water/cancer.ejs')
// })
// // /water/scorpio route
// app.get('/water/scorpio', (req, res)=>{
//     res.render('water/scorpio.ejs')
// })
// // /water/pisces route
// app.get('/water/pisces', (req, res)=>{
//     res.render('water/pisces.ejs')
// })
// // /air/gemini route
// app.get('/air/gemini', (req, res)=>{
//     res.render('air/gemini.ejs')
// })
// // /air/libra route
// app.get('/air/libra', (req, res)=>{
//     res.render('air/libra.ejs')
// })
// // /air/aquarius
// app.get('/air/aquarius', (req, res)=>{
//     res.render('air/aquarius.ejs')
// })
// // /fire/leo
// app.get('/fire/leo', (req, res)=>{
//     res.render('fire/leo.ejs')
// })
// // /fire/aries
// app.get('/fire/aries', (req, res)=>{
//     res.render('fire/aries.ejs')
// })
// // /fire/sagittarius
// app.get('/fire/sagittarius', (req, res)=>{
//     res.render('fire/sagittarius.ejs')
// })
// // /earth/taurus
// app.get('/earth/taurus', (req, res)=>{
//     res.render('earth/taurus.ejs')
// })
// // /earth/virgo
// app.get('/earth/virgo', (req, res)=>{
//     res.render('earth/virgo.ejs')
// })
// // /earth/capricorn
// app.get('/earth/capricorn', (req, res)=>{
//     res.render('earth/capricorn.ejs')
// })

    // Tell the app to listen for incoming requests on PORT 8000
    app.listen(8000, ()=>{
        console.log('You\'re listening to the smooth sounds of port 8000 🎧')
    })