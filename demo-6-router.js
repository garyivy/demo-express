var express = require('express');
var app = express();

const api = express.Router();
const mathApi = express.Router();
const dateApi = express.Router();

// http://localhost:3000/api/math/add?number1=6&number2=7
mathApi.route('/add')
    .get((request, response) => {
        response.send({ answer: parseInt(request.query.number1) + parseInt(request.query.number2)});
    });

// http://localhost:3000/api/math/multiply?number1=6&number2=7
mathApi.route('/multiply')
    .get((request, response) => {
        response.send({ answer: parseInt(request.query.number1) * parseInt(request.query.number2)});
    });

dateApi.route(/^\/.*/)
    .get((request, response) => {
        throw new Error('Thrown exception');
    })
    .post((request, response) => {  // Notice chaining.
        response.send('Under Construction');
    });

api.use('/math', mathApi);
api.use('/date', dateApi);

app.use('/api', api);

app.all(/^\/.*/, (request, response) => {
    response.status(404).send('Not Found');
  });


app.use((error, request, response, next) => {
    console.log(error);
    response.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Demo 6: Express server listening on port 3000')
});