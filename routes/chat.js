
const express = require('express');
const router = express();



router.get('/chat', (req, res) => {

    res.render('chat')
})


module.exports = router

