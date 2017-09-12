const movieModel = require('./../models/movieModel.js');

module.exports = {
    list: async (request, response) => {
        let all = await movieModel.all();
        response.send(all);
    },

    add: async (request, response) => {
        let id = await movieModel.add(request.body);
        response.status(201).send({ id });
    },
    
    find: async (request, response) => {
        let movie = await movieModel.find(request.params.id);
        response.send(movie);
    },

    update: async (request, response) => {
        let id = await movieModel.update(request.body);
        response.send({ id });
    }    
}
