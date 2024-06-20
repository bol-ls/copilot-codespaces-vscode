// Create web server
const express = require('express');
const app = express();

// Import module "comments.js"
const comments = require('./comments');

// Create a route that responds to a POST request
app.post('/comments', (request, response) => {
  console.log('POST request received at /comments');
  response.send('POST request received');
});

// Create a route that responds to a GET request
app.get('/comments', (request, response) => {
  console.log('GET request received at /comments');
  response.send(comments);
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});