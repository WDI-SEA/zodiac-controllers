const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");


app.get("/", (request, response) => {
    response.render("layout");
});

app.get("/fire", (request, response) => {
    response.render("fire", {passionate, strong_emotions, temperamental, energetic, accomplished, interesting});
});

app.get("/water", (request, response) => {
    response.render("water");
});

app.get("/earth", (request, response) => {
    response.render("earth");
});

app.get("/air", (request, response) => {
    response.render("air");
});


app.listen(PORT, () => {
    console.log(`server is online: port ${PORT}`)
});