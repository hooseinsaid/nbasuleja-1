const express = require ('express');
 const router = express.Router();
 const News = require ('../models/news')

 router.post('/', async (req, res)=>{
     console.log(req.body)
    const news = new News ({
        headline: req.body.headline,
        content: req.body.content
    })
    await News.create(news).then((news, err)=>{
        if (err){
            res.send(err);
        }
        else {
            res.send({success: true});
        }
    })

 })

 module.exports = router;