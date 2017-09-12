
var express = require('express');
var app = express();

var urlLogger = (request, response, next) => {
  console.log(request.originalUrl);
  next(); 
}

var methodLogger = (request, response, next) => {
  console.log(request.method);
  next(); 
}


var authenticate = (request, response, next) => {
  if(!request.query.trustme) {
      return response.status(401).send('I do not trust you!');
  }
  next();
};

app.use(urlLogger, methodLogger);

// Suppose I had this terrible secret...
app.get('/secret', authenticate, (request, response) => {
  response.send('I still root for the Rams.');
});

app.get('/goodbye', (request, response) => {
  response.send('Good Bye World!')
});

app.all(/^\/.*/, (request, response) => {
  response.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Demo 3: Express server listening on port 3000')
});














