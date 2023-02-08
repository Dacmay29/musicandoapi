module.exports = (sequelize, dataTypes) => {
    let alias = 'Album';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false
      },
      duracion: {
        type: dataTypes.INTEGER,
        allowNull: false
      } 
    };
    let config = {
      tableName: 'albumes',
      timestamps: false
    };
    const Album = sequelize.define(alias, cols, config)
  
    Album.associate = function (models) {
      Album.hasMany(models.Cancion, {
        as: 'albumes',
        foreignKey: 'id'
      });
    };
  
    return Album;
  
  }
  
  
  
  
  
  