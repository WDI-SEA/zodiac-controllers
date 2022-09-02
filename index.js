const express = require('express')
const app = express()
const PORT = 8000
// // configure for EJS
app.set('view engine', 'ejs')

 app.listen(PORT, ()=> {
    console.log(`you are live on channel ${8000}`)
 })