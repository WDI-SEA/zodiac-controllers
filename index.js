const express = require("express");
const app = express();
const port = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/water", (req, res) => {
  res.send("Water Signs");
});

app.get("/air", (req, res) => {
  res.send("Air Signs");
});

app.get("/fire", (req, res) => {
  res.send("Fire Signs");
});

app.get("/earth", (req, res) => {
  res.send("Earth Signs");
});

// Path: views/index.ejs
const waterTraits = ["Intuitive", "Emotional", "Sensitive", "Mysterious"];
app.get("/water", (req, res) => {
  res.render("water", { traits: waterTraits });
});

const airTraits = ["Intellectual", "Communicative", "Curious", "Idealistic"];
app.get("/air", (req, res) => {
  res.render("air", { traits: airTraits });
});

const fireTraits = ["Passionate", "Confident", "Spontaneous", "Adventurous"];
app.get("/fire", (req, res) => {
  res.render("fire", { traits: fireTraits });
});

const earthTraits = ["Practical", "Dependable", "Hard-working", "Patient"];
app.get("/earth", (req, res) => {
  res.render("earth", { traits: earthTraits });
});

// Path: views/water.ejs
const waterController = require("./controllers/waterController");
app.get("/water/cancer", waterController.getCancer);
app.get("/water/scorpio", waterController.getScorpio);
app.get("/water/pisces", waterController.getPisces);

const airController = require("./controllers/airController");
app.get("/air/gemini", airController.getGemini);
app.get("/air/libra", airController.getLibra);
app.get("/air/aquarius", airController.getAquarius);

const fireController = require("./controllers/fireController");
app.get("/fire/leo", fireController.getLeo);
app.get("/fire/aries", fireController.getAries);
app.get("/fire/sagittarius", fireController.getSagittarius);

const earthController = require("./controllers/earthController");
app.get("/earth/taurus", earthController.getTaurus);
app.get("/earth/virgo", earthController.getVirgo);
app.get("/earth/capricorn", earthController.getCapricorn);

// Path: public/images
app.use(express.static("public"));
