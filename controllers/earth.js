const express = require("express")
const router = express.Router()

const elements = {
    air: {
        signs: ["aquarius", "gemeni", "libra"],
        traits: ["movement", "creativity", "action"],
    },

    water: {
        signs: ["pices", "cancer", "scorpio"],
        traits: ["private", "mysterious", "psychic"]
    },

    fire: {
        signs: ["aries", "leo", "sagittarius"],
        traits: ["passionate", "strong emotions", "tempermental", "energetic"]
    },

    earth: {
        signs: ["taurus", "virgo", "capricorn"],
        traits: ["grounded", "helpful", "practical", "realistic"]

    }
}

router.get("/", (req, res) => {
    //res.send("earth")
    const signs = elements.earth.signs
    const traits = elements.earth.traits
    res.render("show.ejs", {signs: signs, traits: traits})
})

module.exports = router 