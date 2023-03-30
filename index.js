const express = require('express')
const app = express()

const PORT = 8000;

//graphic represented as an object



//set the view engine
app.set("view engine","ejs")
app.use(express.static("public"))


//controllers
app.use("/air", require("./controllers/air"))
app.use("/water", require("./controllers/water"))
app.use("/fire", require("./controllers/fire"))
app.use("/earth", require("./controllers/earth"))

//ROUTES
// http GET url localhost:8000/
//home route
app.get('/', (req,res) =>{
    res.render('index')
})


//air
app.get("/air", (req,res) =>{
    res.render("air",{ element:
    elements.air})
})

app.get("/water", (req,res) =>{
    res.render("water",{ element:
    elements.water})
})

app.get("/earth", (req,res) =>{
    res.render("earth",{ element:
    elements.earth})
})

app.get("/fire", (req,res) =>{
    res.render("fire",{ element:
    elements.fire})
})

app.listen(PORT, () =>{
    console.log(`We are at port ${PORT}`);
})













































// const express = require('express');
// const ejsLayouts = require('express-ejs-layouts');
// const app = express();
// const PORT = 8000;

// // Set up middleware
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));
// app.use(ejsLayouts);

// // Define routes
// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/water', (req, res) => {
//   const waterSigns = ['Cancer', 'Scorpio', 'Pisces'];
//   const waterTraits = [
//     { trait: 'Intuitive', description: 'Able to perceive things beyond the natural senses.' },
//     { trait: 'Empathetic', description: 'Capable of understanding and feeling the emotions of others.' },
//     { trait: 'Mysterious', description: 'Often shrouded in secrecy and difficult to understand.' }
//   ];
//   res.render('category', { category: 'Water', signs: waterSigns, traits: waterTraits });
// });

// app.get('/air', (req, res) => {
//   const airSigns = ['Gemini', 'Libra', 'Aquarius'];
//   const airTraits = [
//     { trait: 'Intellectual', description: 'Curious and always seeking knowledge and understanding.' },
//     { trait: 'Analytical', description: 'Able to break down complex ideas and understand their components.' },
//     { trait: 'Detached', description: 'Tends to be more objective and less emotional in decision-making.' }
//   ];
//   res.render('category', { category: 'Air', signs: airSigns, traits: airTraits });
// });

// app.get('/fire', (req, res) => {
//   const fireSigns = ['Leo', 'Aries', 'Sagittarius'];
//   const fireTraits = [
//     { trait: 'Passionate', description: 'Expresses emotions strongly and energetically.' },
//     { trait: 'Confident', description: 'Believes in oneself and one\'s abilities.' },
//     { trait: 'Independent', description: 'Prefers to rely on oneself rather than others.' }
//   ];
//   res.render('category', { category: 'Fire', signs: fireSigns, traits: fireTraits });
// });

// app.get('/earth', (req, res) => {
//   const earthSigns = ['Taurus', 'Virgo', 'Capricorn'];
//   const earthTraits = [
//     { trait: 'Practical', description: 'Uses logic and reason to solve problems and make decisions.' },
//     { trait: 'Patient', description: 'Able to endure difficult situations or delays without becoming upset.' },
//     { trait: 'Stable', description: 'Reliable and consistent in behavior and emotions.' }
//   ];
//   res.render('category', { category: 'Earth', signs: earthSigns, traits: earthTraits });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log('Server started on port 8000');
// });