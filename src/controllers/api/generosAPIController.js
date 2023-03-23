const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    list: (req, res) => {
        db.Genero.findAll()
        .then(generos=>{
            return res.json(generos);
        })
        
    }
}
module.exports = genresAPIController;