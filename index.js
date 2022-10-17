//import express
const express = require ('express')
const ejsLayouts = require('express-ejs-layouts')
const { url } = require('inspector')

//create an instance of express
const app = express()
const PORT = 3000

//MIDDLEWARE
app.set('view engine','ejs')
app.use(ejsLayouts)

//controllers
app.use("/air",require("./controllers/air.js"))
app.use("/water",require("./controllers/water.js"))
app.use("/fire",require("./controllers/fire"))
app.use("/earth",require("./controllers/earth.js"))


//HOME route
app.get("/", (req,res)=>{
    // res.send('This is the Home Page!')
    res.render('index.ejs')
    
})

///air------
//Aquarius route
app.get("/air/Aquarius", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-AQUARIUS.png?strip=all&w=960"
    res.render('image.ejs',{
        url: url,
        description: 'The sun transits this Air sign from January 20 to February 18. Aquarius, the eleventh sign of the zodiac is all about ideas. They are natural thinkers and visionaries, so will often spend a lot of time contemplating projects and plans.'
    })
})

//Gemini
app.get("/air/Gemini", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-GEMINI.png?strip=all&w=960"
    res.render('image.ejs',{
        url: url ,
        description: 'The sun transits this sign from May 21 to June 21. A Gemini tends to be insightful, smart, cheerful, quick-witted, warm and charming.'
    })
})

//Libra
app.get("/air/Libra", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-LIBRA.png?strip=all&w=960"
    res.render('image.ejs',{url: url,
        description: 'The Sun transits this sign on average between September 23 (September equinox) and October 23. Libra s sign is scales - which is fitting as Librans are fascinated by both symmetry and balance.'
    })
})

///earth-----
//Taurus
app.get("/earth/Taurus", (req,res)=>{
   const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-TAURUS.png?strip=all&w=960"
    res.render('image.ejs',{url: url ,
        description: 'The sun transits Taurus from April 21 until May 20. Taurus is ruled by Venus, which is the planet of beauty and love, making them romantic and supportive.'})
})

//Capricorn
app.get("/earth/Capricorn", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-CAPRICORN.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'The sun transits this Earth sign from about December 22 to January 20 the following year. The Capricorn sign is ruled by Saturn, which is an element of earth, making the sign practical and grounding.'})
})

 ///Virgo
app.get("/earth/Virgo", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-VIRGO.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'The Sun transits this sign on average between September 23 (September equinox) and October 23. Libras sign is scales - which is fitting as Librans are fascinated by both symmetry and balance.'})
})

///fire----
///Aries
app.get("/fire/Aries", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-ARIES.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'The sun transits this sign from March 20 to April 21, with this cardinal sign being the one that kicks off spring. The ruling planet of Aries is Mars, which signifies war and energy.'})
})

//Leo"
app.get("/fire/Leo", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-LEO.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'According to the traditional Western zodiac, Leo season is the period between July 23 and August 22. Warm-hearted Leos are always up for a good time. '})
})

///Sagittarius
app.get("/fire/Sagittarius", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-SAGITTARIUS-1.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'The sun transits this fire sign from November 22 and December 21.Sagittarius is ruled by Jupiter and is a fire sign.'})
})

///water----

//Pisces 
app.get("/water/Pisces", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-PISCES.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'The sun transits this sign from February 18 to March 20. People who have the water sign Pisces are typically able to immerse themselves into a group very easily and are extremely emotional.'})
})

//Cancer
app.get("/water/Cancer", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-CANCER.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'Cancer season starts as the sun enters at the summer solstice in the Northern Hemisphere - usually June 21 or 22, and ends July 22. People who identify as Cancerian are typically very rooted kinds of people, and love to surround themselves with family or things that remind them of home.'})
})

//Scorpio
app.get("/water/Scorpio", (req,res)=>{
    const url ="https://www.thesun.co.uk/wp-content/uploads/2021/10/HOROSCOPE-SCORPIO.png?strip=all&w=960"
     res.render('image.ejs',{url: url ,
        description: 'The sun transits this sign from October 23 to November 22.Scorpio is a water sign and is associated with three different animals: the scorpion, the snake, and the eagle.'})
})











////p1------

// //air route
// app.get("/air", (req,res)=>{
//     // res.send('This is the air Page 🌬!')
//     res.render('air.ejs',{AirTraits : ['Movement','Creativity','Action','Adventure','Exciting','Easily Provoked']})
// })

// //water route
// app.get("/water", (req,res)=>{
//     // res.send('This is the water Page 🌊!')
//     res.render('water.ejs',{WaterTraits : ['Private','Mysterious','Psyshic','Charming','Emotional','Sensitive']})
// })

// //fire route
// app.get("/fire", (req,res)=>{
//     // res.send('This is the fire Page 🔥!')
//     res.render('fire.ejs',{FireTraits : ['Passionate','Strong emotions','Temperamental','Energetic','Accomplished','Interesting']})
// })

// //earth route
// app.get("/earth", (req,res)=>{
//     // res.send('This is the earth Page 🌏!')
//     res.render('earth.ejs',{EarthTraits : ['Grounded','Helpdul','Praetical','Realistic','Materialistic','Dependsble']})
// })


//indicate a port to run the server on
app.listen(PORT,()=>{
    console.log(`Hello to the ${PORT}`)
})