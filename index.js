const express = require("express");
const ejsLayouts = require('express-ejs-layouts')

const app = express();
const PORT = 3333;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(ejsLayouts)



app.get("/", (req, res) => {
  res.render("index.ejs");
})

app.get("/WATER", (req, res) => {
  const waterSigns = ['ScOrPIo', 'cAnCeR', 'PiScEs']
  const waterTraits = [
    "mYstEriOuS🥸",
    "pRiVaRe🤫",
    "pSYchIc🔮",
    "cHaRmInG💘",
    "emOtiOnAl😫",
    "SEnSiTiVe🥺",
  ];
  res.render("water.ejs", {waterTraits, waterSigns});
});

app.get("/FIRE", (req, res) => {
  const fireSigns = ["ArIeS", "LEo", "sAgItTaRiUs"];
  const fireTraits = [
    "paSsIOnaTe👩‍❤️‍💋‍👨",
    "sTrOnG eMoTiOns😡",
    "tEmPeRaMEnTaL😤",
    "eNeRgEtIC🕺",
    "AcComPliShEd⭐️",
    "iNteResTInG🌚",
  ];
  res.render("fire.ejs", {fireTraits, fireSigns});
});

app.get("/EARTH", (req, res) => {
  const earthSigns = ["TaUrUs", "vIRgO", "CaPrIcOrN"];
  const earthTraits = [
    "gRoUnDEd🐖",
    "HeLpFuL😌",
    "PraCTiCaL🔨",
    "rEaLIsTic💯",
    "maTeRiAlIStic👛",
    "dEpEnDaBle🤝",
  ];
  res.render("earth.ejs", {earthTraits, earthSigns});
});

app.get("/AIR", (req, res) => {
  const airSigns = ["gEmInI", "lIBrA", "aQuArIuS"];
  const airTraits = [
    "mOvEmeNT💃🏻",
    "CreAtiViTY🎨",
    "AcTiOn🦹🏼‍♀️",
    "aDvEnTuRe🏕",
    "ExcITiNg🎢",
    "EaSiLy PrOvOKeD💪🏻",
  ];
  res.render("air.ejs", {airTraits, airSigns});
});

app.listen(PORT, () => {
  console.log(`HELLOOOO! YOU ARE IN PORT ${PORT}`);
});
