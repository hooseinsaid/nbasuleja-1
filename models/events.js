const mongoose = require('mongoose')
const schema = mongoose.Schema;

const Events = new schema ({
    date: {type: Date,default: Date.now()},
    headline: String,
    content: string
})

module.exports = mongoose.model('Events', Events);