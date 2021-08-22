const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://127.0.0.1:27017/users-application', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (!err) console.log('MongoDB Connected successfully!');
  else console.log('MongoDB Connection Failed');
});

require('../models/users.model');
module.exports = connection;