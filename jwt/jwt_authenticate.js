const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.TOKEN_SECRET;

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;
  console.log(token);

  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, SECRET, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    } else if (data.role == "user") {
      return res.sendStatus(403);
    }
    if (data.role == "admin") {
      next();
    }
  });
}

module.exports = { authenticateToken };
