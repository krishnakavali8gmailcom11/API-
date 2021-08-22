const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authenticate = require("../middleware/authentication");


router.post("/login", userController.loginUser);

router.get("/getAllUsers", userController.getAllUsers);
router.get("/getUserById/:id", authenticate, userController.getUserById);
router.get("/failedAttempts",userController.Unsuccesful)


//router.post("/createUser", userController.createUser);

module.exports = router;
