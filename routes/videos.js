const express = require('express');
const router = express.Router();

let albumData = require('../data/albumData.json');

let albums = albumData.albums

console.log(albumData);

let videosArr = []

albums.forEach(album =>{
    album.videos.forEach(video =>{
        videosArr.concat(video)
    })
})

router.get('/videos', (req, res)=>{
    res.render('videos',{
       videos: videosArr
    })
})

module.exports = router