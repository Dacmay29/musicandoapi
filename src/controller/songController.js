const db = require('../database/models');

const songController = {
    list: function (req, res) {
        db.Cancion.findAll()
            .then(canciones => res.send(canciones))
            .catch(error => {
                console.error(error);
                res.send('Ocurrió un error al obtener la lista de canciones.');
            });
    }

    // lista 1 , crear , eliminar y editar pendiente -----
};

module.exports = songController;