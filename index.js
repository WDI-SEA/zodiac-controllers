const express = require('express')
const app = express()
const ejslayouts = require('express-ejs-layouts')
const PORT = 8001

// configure app to use ejs - // 1st route, 2nd function
app.set("view engine", "ejs")
app.use(ejslayouts)

// ROUTES
app.get("/", (req, res) => {
    res.render('index.ejs')
})

const waterTraits = ['private', 'mysterious', 'charmning', 'emotional', 'sensitive']
app.get("/water", (req, res) => {
    res.render('water.ejs', {traits: waterTraits})
})

const airTraits = ['movement','creativity', 'action', 'exciting', 'easily provoked']
app.get("/air", (req, res) => {
    res.render('air.ejs', {traits: airTraits})
})

const fireTraits = ['passionate', 'strong emotions', 'temperatal', 'energetic', 'accomplished', 'interesting']
app.get("/fire", (req, res) => {
    res.render('fire.ejs', {traits: fireTraits})
})

const earthTraits = ['ground', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
app.get("/earth", (req, res) => {
    res.render('earth.ejs', {traits: earthTraits})
})

// LISTENER 
app.listen(PORT, () => {
    console.log(`testing new site ${PORT}`)
})