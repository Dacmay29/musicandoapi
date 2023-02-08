const db = require('../database/models');
const Genero = require('../database/models/Genero');


const genreController = {
    list: function (req, res) {
        db.Genero.findAll({
            include: [{
                model: db.Cancion,
                as: 'canciones',
            }],
        })
            .then(generos => {
                res.send(generos);
            })
            .catch(error => {
                console.error(error);
                res.send('Ocurrió un error al obtener la lista de géneros.');
            });

    }
};

module.exports = genreController;