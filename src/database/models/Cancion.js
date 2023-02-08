module.exports = (sequelize, dataTypes) => {
  let alias = 'Cancion';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: dataTypes.STRING,
      allowNull: false
    },
    duracion: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
  };
  let config = {
    tableName: 'canciones',
    createdAt: "created_at", // alias createdAt as created_date
    updatedAt: "updated_at", 
  };
  const Cancion = sequelize.define(alias, cols, config)

  Cancion.associate = function (models) {
    Cancion.belongsTo(models.Genero, {
      as: 'genero',
      foreignKey: 'genero_id'
    });
    Cancion.belongsTo(models.Album, {
      as: 'album',
      foreignKey: 'album_id'
    });
    Cancion.belongsTo(models.Artist, {
      as: 'artista',
      foreignKey: 'artista_id'
    });
  };


  return Cancion
}




