const express = require ('express');
 const router = express.Router();
 const Events = require ('./models/events')

 router.get('/events', async (req, res)=>{
     console.log('events route is working')
    const events = new Events ({
        headline: req.body.headline,
        content: req.body.content
    })
    await Events.create(events).then((events)=>{
        if (err){
            res.send(err);
        }
        else {
            res.send({success: true});
        }
    })

 })

 module.exports = router;