module.exports = (sequelize, dataTypes) => {
    let alias = 'Artist';
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
        apellido: {
            type: dataTypes.STRING,
            allowNull: false
        },

    };
    let config = {
        tableName: 'artista',
        timestamps: false
    };
    const Artist = sequelize.define(alias, cols, config)

    Artist.associate = function (models) {
        Artist.hasMany(models.Cancion, {
            as: "canciones",
            foreignKey: 'id',
        })
    };

    return Artist;

}





