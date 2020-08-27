const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/DanbabaDB';
const MONGODB_URI = 'mongodb+srv://danbaba1882:NAZIR1882@megaincomedb-wqmxa.mongodb.net/NBASULEJA'
const mongoOptions = {useNewUrlParser: true, useUnifiedToplogy:true}

mongoose.connect(process.env.MONGODB_URI || URI, mongoOptions);
mongoose.connection.on('open', ()=>{
    console.log('server has been connected to database');
})