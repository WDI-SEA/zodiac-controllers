const express = require("express")
const app = express()

const PORT = 8080

app.set("view engine", "ejs")
app.use(express.static("public"))

const element = {
    air: {
        type: "air",
        signs: ["Aquarius", "Gemini", "Libra"], 
        traits: ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    earth: {
        type: "earth",
        signs: ["Taurus", "Virgo", "Capricorn"], 
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    },
    fire: {
        type: "fire",
        signs: ["Aries", "Leo", "Sagittarius"], 
        traits: ["passionate", "strong emotions", "tempermental", "energetic", "accomplished", "interesting"]
    },
    water: {
        type: "water",
        signs: ["Pisces", "Cancer", "Scorpio"], 
        traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    }
}

// CONTROLERS
app.use("/air", require("./controllers/air.js"))
app.use("/earth", require("./controllers/earth.js"))
app.use("/fire", require("./controllers/fire.js"))
app.use("/water", require("./controllers/water.js"))


// ROUTE
// home route
app.get("/", (req, res) => {
    res.render("index.ejs")
})


app.listen(PORT, () => {
    console.log(`order up on port ${PORT}🍴`)
})