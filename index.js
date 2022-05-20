const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('Public'));
app.use(ejsLayouts);

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/air", (req, res) => {
    const traits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked'];
	res.render("air.ejs", {traits});
});

app.get("/water", (req, res) => {
    const traits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive'];
	res.render("water.ejs", {traits});
});

app.get("/fire", (req, res) => {
    const traits = ['passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting'];
	res.render("fire.ejs", {traits});
});

app.get("/earth", (req, res) => {
    const traits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable'];
	res.render("earth.ejs", {traits});
});

app.listen(PORT, () => {
	console.log(`I can hear port ${PORT}, but can I view it?`)
})