const jwt = require('jsonwebtoken')
require('dotenv').config()
const userModel = require('../models/userModel')

const protect = async (req,res,next)=>{

    try{

        const authHeader = req.headers.authorization

        if(!authHeader)
        {

            return res.status(401).json({
                message : "no token found"
            })
        }

        const token = authHeader.split(" ")[1]


        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        req.user = decoded;

        const userid = req.user.userid;

        const result = await userModel.getuserbyid(userid)

        if(!result)
        {

            return res.status(401).json({
                message : "user doesnt exists"

            })
            
        }

        

        next();



    }
    catch(error){

         console.error(error.message);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
         console.log("error in middleware")
    }















}

module.exports= protect