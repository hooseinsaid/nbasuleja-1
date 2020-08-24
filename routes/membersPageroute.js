const express = require ('express')
const router = express.Router()
const Members = require ('../models/members')

router.get('/', async (req, res)=>{
const members = await Members.find({});
console.log(members);
    res.render('members', {members: members})
})

module.exports = router;