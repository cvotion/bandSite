const express = require('express');
const router = express.Router();

const fs = require('fs')

let feedbackData = require('../data/feedback.json')
router.use(express.json())
router.use(express.urlencoded({extended: true}))


router.get('/feedback', (req, res)=>{
    res.render('feedback');
})


router.get('/api', (req, res)=>{
    res.json(feedbackData);
})

router.post('/api', (req, res)=>{
    let {name, message} = req.body;

    feedbackData.unshift(req.body)

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf-8', err=>{
        if (err){
            res.status(404).send(err)
        }
    })

    res.json(feedbackData)
})

module.exports = router