const mongoose = require('mongoose')
const schema = mongoose.Schema;

const News = new schema ({
    date: {type: Date,default: Date.now()},
    headline: String,
    content: String,

})

module.exports = mongoose.model('News', News);