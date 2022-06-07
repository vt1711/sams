const express = require('express');
const router = express.Router();
const jwt=require("jsonwebtoken");
const User= require("../model/schema");
const cookieparser = require("cookie-parser");
router.use(cookieparser());


const authenticatelogin = async (req,res,next)=>{
    try {
            // console.log("....middleware entered...");
            // console.log("...middleware jwtoken...",req.cookies.jwtoken);
            
            const token = await req.cookies.jwtoken;
            if(!token){
                // console.log("..server authenticate Token not found..");
                res.status(401).send({error:"Unauthorized access , kindly login"});
                throw new Error("Token not found");    
            } 
            else{
                // console.log("..server authenticate Token Found..",token);
                const verifyToken = jwt.verify(token,process.env.SECRETEKEY);
                // console.log("..server authenticate VerifyToken..",verifyToken);
                const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token": token});
                // console.log("..server authenticate rootuser after token verification..",rootUser);
                
                if(!rootUser){ 
                
                    // console.log("..server authenticate no user..",rootUser);
                 res.status(401).send({error:"Unauthorized access , kindly login"});
                 throw new Error("User not found");
                }
                
                console.log(".. server authenticate user validated ..",rootUser);
                req.token=token;
                req.rootUser=rootUser;
                req.userId = rootUser._id;
                next();
            }           

    } catch (error) {
        console.log("....Error thrown...",error);
        
    }
}

module.exports=authenticatelogin;