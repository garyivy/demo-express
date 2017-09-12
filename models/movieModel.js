var movies = [
    { id: 1, name: 'Star Wars 1', rating: 5 },
    { id: 2, name: 'Star Wars 2', rating: 8 },
    { id: 3, name: 'Star Wars 3', rating: 7 },
    { id: 4, name: 'Star Wars 4', rating: 7 },
    { id: 5, name: 'Star Wars 5', rating: 8 },
    { id: 6, name: 'Star Wars 6', rating: 6 }
];

const DELAY = 1000;

const buildPromise = (action) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(action()), DELAY)
    });

    return promise;
}

module.exports = {
    add: (movie) => {
        const promise = new Promise((resolve, reject) => {
            movie.id = Math.floor(1000 + Math.random() * 9000); // Psuedo Unique
            movies.push(movie);
            setTimeout(() => resolve(movie.id), DELAY)
        });
    
        return promise;        
    },

    update: (movie) => {
        const promise = new Promise((resolve, reject) => {
            let updated = movies.map(m => {
                return m.id == movie.id
                    ? movie
                    : m;
            });
            movies = updated;
            setTimeout(() => resolve(movie.id), DELAY)
        });
    
        return promise;        
    },

    find: (id) => {
        const promise = new Promise((resolve, reject) => {
            let movie = movies.find( m => m.id == id);
            setTimeout(() => resolve(movie), DELAY);
        });
    
        return promise;
    },

    all: () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(movies), DELAY);
        });
    
        return promise;
    }
}