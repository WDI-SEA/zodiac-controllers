const express = require('express')

//configure express and set port
const app = express()
const PORT = 8000

//set routes


//set port listener

app.listen(PORT, () =>{
    console.log(`A fine glass of aged PORT ${PORT}`)
})