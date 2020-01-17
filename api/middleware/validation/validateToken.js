require('dotenv').config()
const jwt = require('jsonwebtoken');

function tokenValidation(req, res, next) {
  const { authorization } = req.headers

  if (authorization) {
    const secret = process.env.JWT_SECRET || 'A secret is a secret does.'
    jwt.verify(authorization, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token!"})
      } else {
        req.token = decodedToken;

        next()
      }
    })
  } else {
    res.status(400).json({ message: "You are not verified. Please login."})
  }
}

module.exports = {
  tokenValidation
}