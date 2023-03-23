const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    list: (req, res) => {
        db.Album.findAll()
            .then(albumes => {

                return res.json(albumes)
            })
    },

    detail: (req, res) => {
        db.Album.findByPk(req.params.id)
            .then(album => {

                return res.json(album);
            })
    }
}

module.exports = albumesAPIController;