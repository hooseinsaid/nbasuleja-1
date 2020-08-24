const express = require('express')
const router = express.Router();
const Members = require ('../models/members')
router.update('/:id', (req, res)=>{
    const id = req.params.id;
    const newmember = Members.findByIdAndUpdate(id,req.body,{new:true},function(err,docs){
        if(err)res.send(err)
        console.log(docs)
    })
    res.json({newmember: newmember})
})

module.exports = router;