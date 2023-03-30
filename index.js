const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// CONTROLLERS
app.use("/air", require("./controllers/air"));

// ROUTES 

app.get("/", (req, res) => {
    // res.send("homepage is working");
    res.render("index.ejs")
    console.log("homepage");
})

app.get("/water", (req, res) => {
    // res.send("water page is working");
    res.render("water.ejs", {
        water: ['cancer', 'scorpio', 'pisces']
    })
    console.log("water");
})

// app.get("/air", (req, res) => {
//     // res.send("air page is working");
//     res.render("air.ejs", {
//         air:['gemini', 'libra', 'aquarius']
//     })
//     console.log("air");
// })

app.get("/fire", (req, res) => {
    // res.send("fire page is working");
    res.render("fire.ejs", {
        fire: ['leo', 'aries', 'sagittarius']
    })
    console.log("fire");
})

app.get("/earth", (req, res) => {
    // res.send("earth page is working");
    res.render("earth.ejs", {
        earth: ['taurus', 'virgo', 'capricorn']
    })
    console.log("earth");
})


app.listen(PORT, () =>
    console.log(`Fired up from Port ${PORT} 🔓`));