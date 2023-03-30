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
// app.use("/air", require("./controllers/air"))
// app.use("/fire", require("./controllers/fire"))
// app.use("/earth", require("./controllers/earth"))

// ROUTES
// home route
app.get("/", (req, res) => {
    res.render("home.ejs")
})

// water route
app.get("/water", (req, res) => {
    res.render("water", {
        traits: ['private','mysterious','psychic','charming','emotional','sensitive']
    })
})

// air route
app.get("/air", (req, res) => {
    res.render("air", {
        traits: ['movement','creativity','action','adventure','exciting','easily provoked']
    })
})

// fire route
app.get("/fire", (req, res) => {
    res.render("fire", {
        traits: ['passionate','strong emotions','tempermental','energetic','accomplished','interesting']
    })
})

// earth route
app.get("/earth", (req, res) => {
    res.render("earth", {
        traits: ['grounded','helpful','practical','realistic','materialistic','dependable']
    })
})


// listener
app.listen(PORT, () => {console.log(`PoRtA pOtTy ${PORT}    🚽`)})