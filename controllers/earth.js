const express= require("express")
const router = express.Router()

const earth ={
    type: 'earth',
    signs:['Taurus', 'Virgo', 'Capricorn'],
    traits:['Practical : Uses logic and reason to solve problems and make decisions.','Big frog says moo', 'Testing the different li functionality']
}


// main air route
//http GET url localhost/8000/earth
router.get("/", (req,res) =>{
    res.render("show", {element: earth})
})


router.get("/:sign", (req,res) => {
    res.send(req.params.sign)
})

module.exports = router