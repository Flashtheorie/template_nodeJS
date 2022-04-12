// app.js
const express = require('express')
const app = express()
var helmet = require('helmet');


// launch views/index.html when / 
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
// create a route to views/login.php
app.get('/login', function(req, res) {
  res.sendFile(__dirname + '/views/login.html');
});

app.use(helmet());
// Start the Express server
app.listen(8080, () => console.log('Server running on port 8080!'))