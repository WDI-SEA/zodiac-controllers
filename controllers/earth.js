const express = require ("express")
const router = express.Router()
const index = require ("../index")

router.get("/", (req, res) => {
    res.render("show", {element : index.elements.earth  })
})

router.get("/Taurus", (req, res) => {
    res.render("images", {sign : "Taurus", element : index.elements.earth  })
})

router.get("/Virgo", (req, res) => {
    res.render("images", {sign : "Virgo", element : index.elements.earth  })
})

router.get("/Capricorn", (req, res) => {
    res.render("images", {sign : "Capricorn", element : index.elements.earth  })
})




module.exports = router;