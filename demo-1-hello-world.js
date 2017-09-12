var express = require('express');
var app = express();

// Respond to all request types (GET, PUT, etc.) and path names with the same message.
app.all(/^\/.*/,(request, response) => {
  response.send('Hello World!  It is going to be a good day');
});

// Serve over http://localhost:3000
app.listen(3000, () => {
  console.log('Demo 1: Express server listening on port 3000');
});