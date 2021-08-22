const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb://127.0.0.1:27017/users-application', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {


//const connection = mongoose.connect('mongodb+srv://krishna:user@cluster0.8m2nk.mongodb.net/user?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err) console.log('MongoDB Connected successfully!');
  else console.log('MongoDB Connection Failed');
});

require('../models/users.models');
module.exports = connection;


