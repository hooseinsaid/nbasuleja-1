const express = require('express')
const router = express.Router();
const News = require ('../models/news')
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    const news = News.find({id:id})
    console.log(news)
    res.json({news: news})
})

module.exports = router;