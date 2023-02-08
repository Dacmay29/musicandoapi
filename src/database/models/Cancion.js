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
    timestamps: false
  };
  const Cancion = sequelize.define(alias, cols, config)

  Cancion.associate = function (models) {
    Cancion.belongsTo(models.Genero, {
      as: 'genero',
      foreignKey: 'genero_id'
    });
  };

  return Cancion
}




