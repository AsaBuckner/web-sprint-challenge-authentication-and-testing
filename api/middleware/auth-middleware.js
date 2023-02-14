const User = require('../auth/auth-model')
const jwt = require('jsonwebtoken')

const validUsername = async (req,res,next)  =>{
    //1. map over the username table and see if anything 
    //matches the req.body.username after trim
    //1C. if no password or usename are found return "username and password required"
    if(!req.body.username || !req.body.password || req.body.username.trim() === '' || req.body.password.trim() === ''){
        next(res.status(404).json("username and password required"))
    }
    //1A. if so -- respond with "username taken"
    else{
        const user  = await User.findByName(req.body.username.trim())
            if(user.length > 0){
                  next(res.status(404).json("username taken"))
            }
            //1B. if no -- respond with next()
            else{
              next()
            }
        }
    }
    //const req.password = req.body.password
    //const req.username = req.body.username



function buildToken (user){
    const payload = {
        subject: user.id,
        username: user.usernam,
        password: user.password
    }
}



module.exports = {
    validUsername,
    buildToken
}