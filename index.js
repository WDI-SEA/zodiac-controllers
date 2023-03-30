// CONFIG
const express = require("express")
const app = express()

// ENVIRONMENTAL VARIABLES
const PORT = 8000

// EXPRESS VIEW ENGINE
app.set("view engine", "ejs")
app.use(express.static("public"))

// CONTROLLERS
app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))

// ROUTES
// home route
app.get("/", (req, res) => {
    res.render("home.ejs")
})

// listener
app.listen(PORT, () => {console.log(`PoRtA pOtTy ${PORT}    🚽`)})