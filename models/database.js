const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017';
const mongoOptions = {useNewUrlParser: true, useUnifiedToplogy:true}

mongoose.connect(URI, mongoOptions);
mongoose.connection.on('open', ()=>{
    console.log('server has been connected to database');
})