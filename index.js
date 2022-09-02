 //  import the required packages
const express = require('express')
// create an instance of an express app
const app = express()
const PORT = 8000
//  define express routes???
app.get('/.', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('It works! ha ha, IT WORKS! I FINALLY invent something that works!')
})
app.get('/', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('Never go against a Sicilian WHEN DEATH IS ON THE LINE!! HAHAHA!)
})
app.get('/', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('Luke! i AM your Father')
})
app.get('/.', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('NOOOOOOOOOO!!')
})
app.get('/.', (req, res) => {
    // console.log('Welcome nighthawks, we have been expecting you🎩')
    res.send('1.21 GIGAWATTS!!')
})
// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to the nest on port ${PORT} nighthawk 🎩`)
})