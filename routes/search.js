var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const users = require('../models/members');
const path = require('path');
  //GET search get page rendering empty model
router.get('/', async function (req, res, next) {
    const searchusers = await users.find();
    
    res.render('search',{model:""})
})

//POST Search request
router.post('/', async function (req, res, next) {
    var element = req.body.input_search
    const result = await users.find({
        $or: [{
         idNumber: {
                $regex: element,
                $options: false
            }
        }, {
            Name: {
                $regex: element,
                $options: 'i'
            }
        }]
    });
    console.log(result)
    res.render('search', {
        model: result
    })
})

module.exports = router
