const express = require('express');
const router = express.Router();

let albumData = require('../data/albumData.json');

let albums = albumData.albums

console.log(albumData);

router.get('/', (req, res)=>{
    res.render('index',{
        albums
    })
})

module.exports = router