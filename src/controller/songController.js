const db = require('../database/models');
// const Cancion = require('../database/models');

const songController = {
    list: function (req, res) {
        db.Cancion.findAll()
            .then(canciones => res.send(canciones))
            .catch(error => {
                console.error(error);
                res.send('Ocurrió un error al obtener la lista de canciones.');
            });
    },
    create: function (req, res) {
        console.log(req.body)
        db.Cancion.create(
            {
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                genero_id:req.body.genero_id
            }
        ).then(canciones => res.send(canciones))
         .catch(error => res.send(error))
    },
    delete: function (req, res) {       
        db.Cancion.destroy({
            where: {
                id:req.params.id
            }
        })
            .then(Cancion => {
            return res.send(Cancion )
            })
            .catch(error => res.send(error))
    },
  
    edit: function (req, res) {
        



       // falta  funcion edit 
    },
    detail: (req, res) => {
        db.Cancion.findByPk(req.params.id)
            .then(canciones => {
                res.send(canciones);
            }) .catch(error => res.send(error));
    },

};


module.exports = songController;