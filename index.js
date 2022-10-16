const express = require('express')

const app = express()

const PORT = 3000

const ejsLayouts = require('express-ejs-layouts')


// MIDDLEWARE
app.set('view engine', 'ejs')

app.use(ejsLayouts)



// CONTROLLERS MIDDLEWARE
app.use('/water', require('./controllers/water.js'))
app.use('/air', require('./controllers/air.js'))
app.use('/fire', require('./controllers/fire.js'))
app.use('/earth', require('./controllers/earth.js'))



// HOME ROUTE
// 4 navigation links (/water, /air, /fire, /earth)
app.get('/', (req, res) => {
    // res.send('Hello World')

    res.render('index.ejs', 
    {
        links: ['Water', 'Air', 'Fire', 'Earth']
    })


})




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})