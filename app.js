// app.js
const express = require('express')
const app = express()

// launch views/index.html when / in nodejs




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

// Start the Express server
app.listen(8080, () => console.log('Server running on port 8080!'))