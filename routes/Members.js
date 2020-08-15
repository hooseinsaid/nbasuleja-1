const express = require ('express');
 const router = express.Router();
 const Members = require ('./models/members')

 router.post('/members', async (req, res)=>{
    const members = new Members ({
    Name: req.body.name,
    idNumber: req.body.id,
    Status: req.body.status,
    profilePicture: req.file.path
    })
    await Members.create(members).then((members)=>{
        if (err){
            res.send(err);
        }
        else {
            res.send({success: true});
        }
    })

 })

 module.exports = router;