const express = require ('express');
 const router = express.Router();
 const Members = require ('../models/members')

 router.get('/', async (req, res)=>{
    res.render('dashboard')
 })

 module.exports = router;