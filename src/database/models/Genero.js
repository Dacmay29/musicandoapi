module.exports = (sequelize, dataTypes) => {
  let alias = 'Genero';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    },

  };
  let config = {
    tableName: 'generos',
    timestamps: false
  };
  const Genero = sequelize.define(alias, cols, config)

  Genero.associate = function (models) {
    Genero.hasMany(models.Cancion, {
      as: 'canciones',
      foreignKey: 'id'
    });
  };

  return Genero;

}





