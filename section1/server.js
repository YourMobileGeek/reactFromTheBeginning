const express = require('express');
const app = express();
app.use(express.static(__dirname+'/'));

// the port we would like for our static web server to 
app.listen(3000);

//feedback given in the console 
console.log("Node/Express server is running on port 3000");