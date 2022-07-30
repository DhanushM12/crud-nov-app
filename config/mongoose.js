const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/subscribernov');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "Error in connection to MongoDB"))

db.once('open', function(){
    console.log('Successfully connected to Mongo DB')
})

module.exports = db;


