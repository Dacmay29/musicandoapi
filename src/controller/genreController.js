const db = require('../database/models');

const genreController = {
    list: function (req, res) {
        res.send('generos')
        
    }
};

module.exports = genreController;