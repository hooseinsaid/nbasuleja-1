const express = require ('express');
 const router = express.Router();
 const Members = require ('../models/members')

 router.post('/', async (req, res)=>{
     console.log(req.body)
    const members = new Members ({
    Name: req.body.name,
    idNumber: req.body.id,
    Status: req.body.status
    })
    await Members.create(members).then((members, err)=>{
        if (err){
            res.send(err);
        }
        else {
            res.send({success: true});
        }
    })

 })

 module.exports = router;