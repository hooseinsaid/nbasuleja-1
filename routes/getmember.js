const express = require('express')
const router = express.Router();
const Members = require ('../models/members')
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    const member = Members.find({id:id})
    console.log(member)
    res.json({member: member})
})

module.exports = router;