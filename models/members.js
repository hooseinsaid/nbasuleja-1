const mongoose = require('mongoose')
const schema = mongoose.Schema;

const Members = new schema ({
    date: {type: Date,default: Date.now()},
    Name: String,
    idNumber: String,
    Status: String,
    profilePicture: String
})

module.exports = mongoose.model('Members', Members);