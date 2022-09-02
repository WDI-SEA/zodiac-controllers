const express = require("express")
const app = express()
const PORT = 8000
const ejsLayouts = require("express-ejs-layouts")
app.set("view engine", "ejs")
app.use(ejsLayouts)
app.use("/water", require("./controllers/water"))
app.use("/air", require("./controllers/air"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))
app.use(express.static("public"))

// const airSigns = ["Aquarius", "Gemini", "Libra"]
// const airTraits = ["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]

// const waterSigns = ["Pisces", "Cancer", "Scorpio"]
// const waterTraits = ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]

// const fireSigns = ["Aries", "Leo", "Sagittarius"]
// const fireTraits = ["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]

// const earthSigns = ["Taurus", "Virgo", "Capricorn"]
// const earthTraits = ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]

//solution by april
const elements = {
    air: {
        name: "Air",
        signs:["Aquarius", "Gemini", "Libra"],
        traits:["movement", "creativity", "action", "adventure", "exciting", "easily provoked"]
    },
    water: {
        name: "Water",
        signs:["Pisces", "Cancer", "Scorpio"],
        traits:["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
    },
    fire: {
        name: "Fire",
        signs:["Aries", "Leo", "Sagittarius"],
        traits:["passionate", "strong emotions", "temperamental", "energetic", "accomplished", "interesting"]
    },
    earth: {
        name: "Earth",
        signs:["Taurus", "Virgo", "Capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
    }
}

module.exports.elements = elements;



app.get("/", (req, res) => {
    res.render("index")
})



app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})