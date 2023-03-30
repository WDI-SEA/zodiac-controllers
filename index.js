const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// CONTROLLERS
app.use("/air", require("./controllers/air"));
app.use("/earth", require("./controllers/earth"));
app.use("/fire", require("./controllers/fire"));
app.use("/water", require("./controllers/water"));

// ROUTES 

app.get("/", (req, res) => {
    // res.send("homepage is working");
    res.render("index.ejs")
    console.log("homepage");
})

app.listen(PORT, () =>
    console.log(`Fired up from Port ${PORT} 🔓`));