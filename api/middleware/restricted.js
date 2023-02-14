const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../../secrets/index')


module.exports = (req, res, next) => {
  //if no token is found in header.token respond with "token required"
  const token = req.headers.authorization
  if(!token){
    next(res.status(404).json("token required"))
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({ status: 401, message: 'Token invalid'})
    } else {
      req.decodedTokoen = decodedToken
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
