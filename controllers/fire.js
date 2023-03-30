const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("show", {element: air} )
})
router.get("/", (req, res) => {
  res.render("show", {element: water} )
})
router.get("/", (req, res) => {
  res.render("show", {element: fire} )
})
router.get("/", (req, res) => {
  res.render("show", {element: earth} )
})

router.get("/:sign", (req, res) => {
  res.render ("sign", sign, req.params.sign)
})



module.exports = router