const express = require('express');
const router = express.Router();

let albumData = require('../data/albumData.json')

let albums = albumData.albums

router.get('/albums/:id', (req, res)=>{
    let id = req.params.id
    let album = []
    let tracks = []
    albums.forEach(albumObj =>{
        if(albumObj.shortname == id){
            album.push(albumObj)
            tracks = albumObj.tracklist
        }
    })
    res.render('albums',{
        album,
        tracks
    })
})

module.exports = router