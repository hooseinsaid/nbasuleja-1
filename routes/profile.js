const express = require ('express');
 const router = express.Router();

 const Members = require ('../models/members')

router.get('/:id', async (req, res)=>{
    const id = req.params.id;
const member = await Members.findById({id: id});
console.log(member);
    res.render('profile', {member: member})
})

 module.exports = router;