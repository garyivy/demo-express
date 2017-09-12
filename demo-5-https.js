
var express = require('express');
var app = express();

var authenticate = (request, response, next) => {
  if(!request.query.trustme) {
      return response.status(401).send('I do not trust you!');
  }
  next();
};

// Not only does such an awful secret need authentication, it needs to be passed over SSL
app.get('/secret', authenticate, (request, response) => {
  response.send('I still root for the Rams.');
});

app.get('/public', (request, response) => {
  response.send('I root for the Chiefs');
});

app.all(/^\/.*/, (request, response) => {
  response.status(404).send('Not Found');
});

/*
Note: The listen function is a shortcut. 
Knowing this helps us to see what needs to be done for HTTPS.

app.listen = function() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};
*/

var https = require('https');
var fs = require('fs');

var expressOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    requestCert: false,
    rejectUnauthorized: false
};

https.createServer(expressOptions, app).listen(443, () => {
  console.log('Demo 5: Express server listening on port 443');
});
















