//---REQUIRED PACKAGES---
const express = require('express')

//---APP CONFIG----
const app = express()
const PORT = 8000
app.set('view engine', 'ejs')


//---ROUTES----
app.get('/', (req,res) => {
    res.render('index.ejs')
})

//---CONTROLLERS----

