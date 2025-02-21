const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET;
const signToken=(userId)=>{
    return jwt.sign({userId},JWT_SECRET,{expiresIn:'1h'});
}
const verifyToken=(token)=>{
    return jwt.verify(token,JWT_SECRET);
}
module.exports={signToken,verifyToken};