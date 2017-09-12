var express = require('express');
var app = express();

// Response for /goodbye GET
app.get('/goodbye', (request, response) => {
  response.send('Good Bye!')
});

// Note: Paths can be express as array and/or regular expressions
app.get(['/goodbye', '/adios', /^\/good(by|day)$/], (request, response) => {
  response.send('Good Bye !')
});

// Default response
app.all(/^\/.*/, (request, response) => {
  response.send('Hello World!');
});

// Note: If I place /goodbye here, it will never be hit due since default response would take precendence

app.listen(3000, () => {
  console.log('Demo 2: Express server listening on port 3000')
});

// FOR TESTING:
// curl http://localhost:3000/goodbye
// curl -X POST -d "{}" http://localhost:3000/goodbye

// Another example: ['/goodbye', '/adios', /^\/good(by|day)$/]
