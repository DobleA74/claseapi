const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    list: (req, res) => {
        db.Medio.findAll()
        .then(medios=>{
            return res.json(medios);
        })
        
    }
    }
module.exports = mediosAPIController;