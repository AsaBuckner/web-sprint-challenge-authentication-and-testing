const jwt = require('jsonwebtoken')


const JWT_SECRET = 'mysecretkey'



module.exports = (req, res, next) => {
  //if no token is found in header.token respond with "token required"
  const token = req.headers.authorization

  if(!token) {
    res.status(400).json({message: "token required"})
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({message: "token invalid" })
    } else {
      req.decodedToken = decodedToken
      next()
    }
  })
  //else if invalid or expired token resond with "token invalid"
  //else respond with next(
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
