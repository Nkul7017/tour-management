const jwt = require('jsonwebtoken');
const login=require('../Router/model/LoginModel')
const authentication=async(req,res,next)=>{
        try{
            const token = req.cookies.jwttoken;
            console.log("hello");
            console.log(token)
const verifyToken=jwt.verify(token,process.env.Secret_key);
const rootuser=await login.findOne({
    _id:verifyToken._id,
    "tokens.token":token
})
if(rootuser)
{
    req.rootuser=rootuser;
    next();
}
        }
        catch(e){
            res.status(401).send("Uauthorized");
            console.log(e);
        }
}
module.exports=authentication;