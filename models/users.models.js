const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
    failed: Date(dateString),
});

module.exports = mongoose.model('User',UserSchema)