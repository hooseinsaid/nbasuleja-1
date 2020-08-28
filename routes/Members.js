const express = require ('express');
 const router = express.Router();
 const Members = require ('../models/members')
 const multer = require('multer')
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'imguploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

 router.post('/', upload.single('postimage'), (req, res)=>{
     console.log(req.body.name)
    const member = new Members ({
    Name: req.body.name,
    idNumber: req.body.id,
    Status: req.body.status,
    profilePicture: req.file.path
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