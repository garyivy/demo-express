
var express = require('express');
var app = express();

var middleware = (request, response, next) => {
  console.log('I could do something.  But, I am going to simply call next().');
  next(); // Note: Don't forget call next!
}

var urlLogger = (request, response, next) => {
  console.log(request.originalUrl);
  next(); 
}

var methodLogger = (request, response, next) => {
  console.log(request.method);
  next(); 
}

// Install "Middleware"
app.use([urlLogger, methodLogger]);

app.get(['/goodbye', '/adios', /^\/good(by|day)$/], middleware, (request, response) => {
  response.send('Good Bye World!')
});

app.all(/^\/.*/, (request, response) => {
  response.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Demo 3: Express server listening on port 3000')
});
















