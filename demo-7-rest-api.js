var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(function(req, res, next) {  // Enable cross origin resource sharing (for app frontend)
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // Prevent CORS preflight request from redirecting
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next(); 
    }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(require('./routes/movies.js'));

app.all(/^\/.*/, (request, response) => {
    response.status(404).send('Not Found');
  });

app.listen(3000, () => {
    console.log('Demo 7: Express server listening on port 3000')
  });

////////////////////////////////////////////
var appStatic = express();
appStatic.use(express.static('static'));
appStatic.listen(3002, () => {
    console.log('Demo 7B: Static site served on port 3002');
})