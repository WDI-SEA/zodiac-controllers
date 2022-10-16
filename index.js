const express = require("express")

const app = express()
app.set('view engine', 'ejs')

const PORT = 3000

app.get("/",(req, res)=>{
    res.render("index.ejs")
})

app.get("/water", (req, res)=>{
    res.render("water.ejs", 
    {
        traits:[ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })
})

app.get("/air", (req, res)=>{
    res.render("air.ejs", 
    {
        traits:['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
})

app.get("/fire", (req, res)=>{
    res.render("fire.ejs",
    {
        traits:[ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
})

app.get("/earth", (req, res)=>{
    res.render("earth.ejs",
    {
        traits:['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
})

app.listen(PORT, ()=>{
    console.log(`Its working${PORT}`)
})


// const express = require("express")
// const ejs = require("ejs")
// // const app = express()

// app.set('view engine', 'ejs')

// // const PORT = 3000

// <% - include('./partials/header.ejs') %> 

// app.get('/',(req, res)=>{
//     res.render('index.ejs', 
//     {
//         name: "s", age: 24
//     })
// })

// app.get('/blog',(req, res)=>{
//     res.render('blog.ejs')
// })

// app.get('/about',(req, res)=>{
//     res.render('about.ejs',
//     {
//         favefoods: ["Pizza", "Tacos","sushi"]
//     })
// })

// app.listen(PORT, ()=>{
//     console.log(`Hello, Seattle.  I'm listening... ${PORT}`)
// })