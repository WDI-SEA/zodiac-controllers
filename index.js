const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

const app = express()
const PORT = 5757


app.set('view engine', 'ejs')

//relative pathing (throws all files into 'public' folder)
app.use(express.static('Public'))
app.use(ejsLayouts) 

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/fire', (req, res) => {
    const relevantTraitsFire =  ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"] 
    res.render("fire.ejs", {relevantTraitsFire})
})

app.get('/water', (req, res) => {
    const relevantTraitsWater = ["private", "mysterious", "physhic", "charming", "emotional", "sensitive"] 
    res.render("water.ejs", {relevantTraitsWater})
})

app.get('/earth', (req, res) => {
     const relevantTraitsEarth = ["grounded", "helpful", "practical", "realistic", "materialstic", "dependable"] 
    res.render("earth.ejs", {relevantTraitsEarth})
})

app.get('/air', (req, res) => {
    const relevantTraitsAir = ["movement", "creativity", "action", "adventure", "exiting", "easily provoked" ] 
    res.render("air.ejs", {relevantTraitsAir})
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})