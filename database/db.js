// Connect mysql server and database.
const mysql = require("mysql");
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "vmtraining",
	multipleStatements: true,
});
connection.connect((err) => {
	if (!err) {
		console.log("Connection Established");
	} else {
		console.log(err);
	}
});
module.exports = connection;
// Create Database
// let query = "";
// query = "CREATE DATABASE vmtraining";
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Successfully created database");
// 	} else {
// 		console.log(err);
// 	}
// });

// Drop Database
// query = "DROP DATABASE vmtraining";
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Successfully deleted database");
// 	} else {
// 		console.log(err);
// 	}
// });

// Create Table
// query = `
// CREATE TABLE users(
//   id INT(11) NOT NULL AUTO_INCREMENT,
//   email VARCHAR(100) NOT NULL,
//   password VARCHAR(100) NOT NULL,
//   role VARCHAR(100) DEFAULT 'user',
//   PRIMARY KEY (id),
//   UNIQUE (email)
// );
// CREATE TABLE enrolls(
//   id INT(11) REFERENCES users(id),
//   FOREIGN KEY (id) REFERENCES users(id)
// );
// `;
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Successfully created tables");
// 	} else {
// 		console.log(err);
// 	}
// });

// Alter Table
// query = `
// ALTER TABLE users ADD location VARCHAR(100)
// `;
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Successfully modified users table");
// 	} else {
// 		console.log(err);
// 	}
// });

// Truncate Table
// query = "TRUNCATE TABLE enrolls";
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Successfully deleted enrolls table");
// 	} else {
// 		console.log(err);
// 	}
// });
// Drop Table
// query = "DROP TABLE users";
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Successfully deleted enrolls table completely");
// 	} else {
// 		console.log(err);
// 	}
// });

// CRUD Operations:
// Insert a record.
// query = "INSERT INTO users (email,password) VALUES('venkatesh@gmail.com','venkatesh')";
// query = "INSERT INTO users SET ?";
// connection.query(query, [ { email: "vivek@gmail.com", password: "vivek" } ], (err, result) => {
// 	if (!err) {
// 		console.log("Successfully inserted a record");
// 	} else {
// 		console.log(err);
// 	}
// });

// Select Table
// query = "SELECT * FROM users";
// connection.query(query, (err, result) => {
// 	if (result.length > 0) {
// 		console.log(result);
// 	} else {
// 		console.log(err);
// 	}
// });

// SQL Injection and protection
// let id = "4 OR 1=1";
// // let email = 'venkatesh@gmail.com" OR ""="';
// // let password = 'venkatesh" OR ""="';
// query = "SELECT * FROM users WHERE id=" + mysql.escape(id);
// // query = 'SELECT * FROM users WHERE email="' + email + '" and password="' + password + '"';
// connection.query(query, (err, result) => {
// 	if (result.length > 0) {
// 		console.log(result);
// 	} else {
// 		console.log(err);
// 	}
// });

// Update a record
// query = "UPDATE users SET ? WHERE ?";
// connection.query(query, [ { password: "vivek3" }, { id: 4 } ], (err, result) => {
// 	if (!err) {
// 		console.log("Updated Successfully");
// 	} else {
// 		console.log(err);
// 	}
// });

// Delete a record
// query = "DELETE FROM users";
// connection.query(query, (err, result) => {
// 	if (!err) {
// 		console.log("Deleted All Successfully");
// 	} else {
// 		console.log(err);
// 	}
// });
