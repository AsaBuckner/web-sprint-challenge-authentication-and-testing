const jwt = require('jsonwebtoken')


const JWT_SECRET = 'mysecretkey'



module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if(!token) {
    return next({ status: 404, message: 'Token required' })
  }else{

    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return next({ status: 401, message: 'Token invalid' })
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  }

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
