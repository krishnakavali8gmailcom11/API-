const mongoose = require('mongoose');

const UnsuccesSchema = new mongoose.Schema({
	
	email: String,
    date:Date,
	
    
});

module.exports = mongoose.model('Unsuccess', UnsuccesSchema)