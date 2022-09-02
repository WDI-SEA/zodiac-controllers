const express = require('express')
const router = express.Router()


router.get("/air", (req, res) => {
    res.render("air", {signs: ['Aquarius', 'Gemini', 'Libra']})
})

module.exports = router;