//require express
const express = require("express");
const app = express();
const PORT = 3000;
//create an instance of ecxpress

//tell app which port to listen to
app.listen(PORT, () => {
  console.log(`listening for request on port ${3000}`);
});
