const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    list: (req, res) => {
        db.Cancion.findAll({
            include:["genero","medio"]
        })
        .then(canciones=>{
            return res.json(canciones);
        })
        
    }
}
module.exports = cancionesAPIController;