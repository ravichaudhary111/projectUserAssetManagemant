const jwt = require("jsonwebtoken")

exports.verifyAccessToken=(req,res,next) =>{
console.log(JSON.stringify(req.header))
    const {authorization} =req.body;
    console.log("token",authorization)
     token =authorization;
    const SECRETKEY =process.env.SECRETKEY || "sshdjsskks" 
    console.log("token",token)
    try {
      const decoded = jwt.verify(token, SECRETKEY);
      console.log("decoded",decoded);
     if(!decoded){
        throw new Error("not a vaild token")
     }
     next()
    } catch (error) {
        throw new Error("not a vaild token ")
    }
  }