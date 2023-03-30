const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"))

// ROUTES 

app.get("/", (req, res) => {
    res.send("homepage is working");
    console.log("homepage");
})

app.get("/water", (req, res) => {
    res.send("water page is working");
    console.log("water");
})

app.get("/air", (req, res) => {
    res.send("air page is working");
    console.log("air");
})

app.get("/fire", (req, res) => {
    res.send("fire page is working");
    console.log("fire");
})

app.get("/earth", (req, res) => {
    res.send("earth page is working");
    console.log("earth");
})


app.listen(PORT, () =>
    console.log(`Fired up from Port ${PORT} 🔓`));