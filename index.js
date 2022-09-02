const express = require('express')

//configure express and set port
const app = express()
const PORT = 8000

//set routes
app.get('/', (req,res) =>{
    res.send("hola")
})
app.get('/water', (req,res) =>{
    res.send('agua')
})

app.get('/air', (req,res) =>{
    res.send('aire')
})

app.get('/fire', (req,res) =>{
    res.send("fuego")
})

app.get('/earth', (req,res) =>{
    res.send('mundo')
})
//set port listener

app.listen(PORT, () =>{
    console.log(`A fine glass of aged PORT ${PORT}`)
})