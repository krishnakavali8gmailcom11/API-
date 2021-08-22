const jwt = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
	const token = req.headers.authorization;
	if (typeof token !== "undefined") {
		jwt.verify(token, "secretKey", (err, user) => {
			if (!err) {
				req.user = user;
				next();
			} else {
				res.status(401).send({ message: "Unauthorized", err });
			}
		});
	} else {
		res.send({ message: "Unauthorized" });
	}
};
module.exports = authenticateToken;
