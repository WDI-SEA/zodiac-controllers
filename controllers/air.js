const express= require("express")
const router = express.Router()

const air ={
    type: 'air',
    signs:['Cancer', 'Scorpio', 'Pisces'],
    traits:['Intuitive Able to perceive things beyond the natural senses.','Big frog says moo', 'Testing the different li functionality']
}


// main air route
//http GET url localhost/8000/air
router.get("/", (req,res) =>{
    res.render("show", {element: air})
})


router.get("/:sign", (req,res) => {
    res.send(req.params.sign)
})

module.exports = router