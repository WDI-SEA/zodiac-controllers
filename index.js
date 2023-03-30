const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// ROUTES 




app.listen(PORT, () =>
    console.log(`Fired up from Port ${PORT} 🔓`));