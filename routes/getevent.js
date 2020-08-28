const express = require('express')
const router = express.Router();
const Events = require ('../models/events')
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    const event = Events.find({id:id})
    console.log(event)
    res.json({event: event})
})

module.exports = router;