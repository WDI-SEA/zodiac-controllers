const express = require('express')

const app = new express()

const PORT = 3000


// MIDDLEWARE
app.set('view engine', 'ejs')



// HOME ROUTE
// 4 navigation links (/water, /air, /fire, /earth)
app.get('/', (req, res) => {
    // res.send('Hello World')



    res.render('index.ejs', 
    {
        links: ['Water', 'Air', 'Fire', 'Earth']
    })


})

// WATER ROUTE
// list of water signs and relevant traits from the graphic above
app.get('/water', (req, res) => {

    // res.send('Hello Water')


    res.render('water.ejs', 
    {
        traits: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })


})

// AIR ROUTE
// list of air signs and relevant traits from the graphic above
app.get('/air', (req, res) => {
    // res.send('Hello Air')


    res.render('air.ejs', 
    {
        traits: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})


// FIRE ROUTE
// list of fire signs and relevant traits from the graphic above
app.get('/fire', (req, res) => {
    // res.send('Hello Fire')


    res.render('fire.ejs', 
    {
        traits: ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})


// EARTH ROUTE
// list of earth sign and relevant traits from the graphic above
app.get('/earth', (req, res) => {
    // res.send('Hello Earth')


    res.render('earth.ejs', 
    {
        traits: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})