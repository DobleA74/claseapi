const { response } = require('express');
const path = require('path');
const db = require('../../database/models');

const artistasAPIController = {
    list: (req, res) => {
        db.Artista.findAll()
            .then(artistas => {

                return res.json(artistas)
            })

    },

    create: (req, res) => {
        const artista = {
            nombre: req.body.nombre
        }
        console.log(req.body);
        db.Artista
            .create(artista)
            .then(artista => {
                return res.status(200).json({
                    data: artista,
                    status: 200,
                    created: 'ok'
                })
            })

    },
    update: (req, res) => {
        const id = req.params.id
        db.Artista
        .update({nombre:req.body.nombre},{
            where: {id:parseInt(id)} 
        })
        .then(artista=>{
            return res.status(200).json({
                data: artista,
                status: 200,
                updated: 'ok'
            })
        })
    },
    destroy: (req, res) => {
        db.Artista
        .destroy({
            where:{id: req.params.id}
        })
        .then()
        return res.status(200).json({
            status: 204,
            deleted: 'ok'
        })
    }
}
module.exports = artistasAPIController;