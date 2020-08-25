const express = require ('express');
 const router = express.Router();
 const Members = require ('../models/members')

 router.post('/', (req, res)=>{
     console.log(req.body.name)
    const member = new Members ({
    Name: req.body.name,
    idNumber: req.body.id,
    Status: req.body.status
    })

    console.log(member)

    Members.create(member).then((member, err)=>{
        console.log(member);
        if (err){
            res.send(err);
        }
        else {
            res.send({success: true});
        }
    })

 })

 module.exports = router;