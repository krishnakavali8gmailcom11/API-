const mongoose = require('mongoose');
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const UserModel = mongoose.model('User');


//API for Login User (generates JWT token)
const loginUser = (req, res) => {
	UserModel.findOne({ email: req.body.email, password: req.body.password }, (err, rows) => {
		if (!err) {
			jwt.sign({ user: rows[0] }, "secretKey", { expiresIn: "10m" }, (err, token) => {
				if (err) {
					res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
				} else {
					res.send({ success: true, data: rows, message: "Logged In Successfully!", token });
				}
			});
		}
		 else{
		if(!email || !password){
              res.send({success: false, data: null, message: "invalid credentials"})
		}
		
	}
		 {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};
//Another login method if we have encrypted or Hashed  the password or else  make it comment
//if we want to use that add mongoDB or atlas connection in .env file (dotenv) or do 32 to 74 lines comment
exports.user_login = (req, res, next) => {
	User.find({ email: req.body.email })
	  .exec()
	  .then(user => {
		if (user.length < 1) {
		  return res.status(401).json({
			message: "Auth failed"
		  });
		}
		bcrypt.compare(req.body.password, user[0].password, (err, result) => {
		  if (err) {
			return res.status(401).json({
			  message: "Auth failed"
			});
		  }
		  if (result) {
			const token = jwt.sign(
			  {
				email: user[0].email,
				userId: user[0]._id
			  },
			  process.env.JWT_KEY,
			  {
				expiresIn: "10m"
			  }
			);
			return res.status(200).json({
			  message: "Auth successful",
			  token: token
			});
		  }
		  res.status(401).json({
			message: "Auth failed"
		  });
		});
	  })
	  .catch(err => {
		console.log(err);
		res.status(500).json({
		  error: err
		});
	  });
  };









const getAllUsers = (req, res) => {
	UserModel.find((err, rows) => {
		if (!err) {
			// res.render("homepage", {
			// 	user: rows[0],
			// });
			res.send({ success: true, data: rows, message: "Users data retrieved Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};

const getUserById = (req, res) => {
	UserModel.findById(req.params.id, (err, rows) => {
		if (!err) {
			res.send({ success: true, data: rows, message: "Users data retrieved Successfully!" });
		} else {
			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
		}
	});
};



const Unsuccesful =(req, res) =>{
	UserModel.findOne({email: req.body.email, password:req.body.password  }, (err, rows) =>{
		if(!password){
				res.send({success: true, data: failed.datetime.now(), message: "failed "})
		}
	})
  }



///Api for create user 
// const createUser = (req, res) => {
// 	const Users = new UserModel();
// 	Users.name = req.body.name;
// 	Users.age = req.body.age;
// 	Users.email = req.body.email;
// 	Users.password = req.body.password;
// 	Users.save((err,doc) => {
// 		if (!err) {
// 			res.send({ success: true, data: doc, message: "User Created Successfully!" });
// 		} else {
// 			res.send({ success: false, data: null, message: err ? err : "Something went wrong" });
// 		}
// 	});
// };




// 
module.exports = {
	
	loginUser,
	getAllUsers,
	getUserById,
	Unsuccesful,


	//createUser,
	
	
	
};
