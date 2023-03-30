// CONFIG
const express = require("express")
const app = express()

// ENVIRONMENTAL VARIABLES
const PORT = 8000

// EXPRESS VIEW ENGINE
app.set("view engine", "ejs")
app.use(express.static("public"))

// CONTROLLERS
// app.use("", require(""))

// ROUTES
// home route
app.get("/", (req, res) => {
    res.send("home")
})

// water route
app.get("/water", (req, res) => {
    res.send("Water Tribe")
})

// air route
app.get("/air", (req, res) => {
    res.send("Airbenders")
})

// fire route
app.get("/fire", (req, res) => {
    res.send("Fire Nation")
})

// earth route
app.get("/earth", (req, res) => {
    res.send("Earth Kingdom")
})


// listener
app.listen(PORT, () => {console.log(`PoRtA pOtTy ${PORT}    🚽`)})