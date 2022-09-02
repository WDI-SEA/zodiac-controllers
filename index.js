 //  import the required packages
const express = require('express')
// create an instance of an express app
const app = express()
const PORT = 3000
//  define express routes???
app.get('/.', (req, res) => {
    console.log('Welcome to the nest nighthawk 🎩')
})
// tell express to listen on a port for incoming http requests
app.listen(PORT, () => {
    console.log(`Welcome to the nest on port ${PORT} nighthawk 🎩`)
})