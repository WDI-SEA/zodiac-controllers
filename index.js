const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('This is the Home Page')
})

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})