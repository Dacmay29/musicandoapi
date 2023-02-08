const db = require('../database/models');
const Cancion = require('../database/models');

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
        genero_id: req.body.genero_id,
        album_id: req.body.album_id,
        artista_id: req.body.artista_id
      }
    ).then(canciones => res.send(canciones))
      .catch(error => res.send(error))
  },
  delete: function (req, res) {
    db.Cancion.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(cancion => {
        if (!cancion) {
          return res.status(404).send({ error: 'Cancion no encontrada' });
        }
        res.sendStatus(200);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send({ error: 'Error al eliminar Cancion' });
      });
  },
  edit: function (req, res) {
    db.Cancion.findByPk(req.params.id)
      .then(cancion => {
        if (!cancion) {
          return res.status(404).send({ error: 'La canción no fue encontrada' });
        }
        return db.Cancion.update({
          titulo: req.body.titulo,
          duracion: req.body.duracion,
          genero_id: req.body.genero_id,
          album_id: req.body.album_id,
          artista_id: req.body.artista_id,
        }, {
          where: {
            id: req.params.id,
          },
        })
          .then(() => {
            return res.send({ message: 'La canción fue actualizada correctamente' });
          });
      })
      .catch((error) => res.send(error));
  },
  detail: (req, res) => {
    db.Cancion.findByPk(req.params.id)
      .then(canciones => {
        res.send(canciones);
      }).catch(error => res.send(error));
  },
};

module.exports = songController;