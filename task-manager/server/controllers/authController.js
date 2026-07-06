const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signup = async (req,res)=>{

    try{
            const { name , email , password} = req.body

            if(!name || !email || !password)
            {
                return res.status(400).json({ message: "All fields are required" });

            }

            const result = await userModel.getUserByEmail(email);

            if(result)
            {

                 return res.status(400).json({ message: "Email already exists" });

            }
          
            const saltRounds = 10;

           const hashedpass =  await bcrypt.hash(password,saltRounds)

           const user = await userModel.CreateUser(name,email,hashedpass)


           
           
           return res.status(200).json({
            
            message : "signup successfull",
            


           })







    }
    catch(error){
        console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })
    }




}

const login = async (req,res)=>{

    try{
            const { email , password} = req.body

            if( !email || !password)
            {
                return res.status(400).json({ message: "All fields are required" });

            }

            const user = await userModel.getUserByEmail(email);

            if(!user)
            {

                 return res.status(400).json({ message: "No email exists" });

            }
          
            const saltRounds = 10;

           
           const isMatch =  await bcrypt.compare(password,user.password)

           if(!isMatch)
           {
            return res.status(401).json({ message: "Incorrect Password" });
           }

           const token = jwt.sign(
            {userid : user.id, role : user.role},
            process.env.JWT_SECRET,
            {expiresIn : "1h"}


           ) 

           return res.status(201).json({ message: "Login Successfull",
            token : token

            });
           








    }
    catch(error){

        console.error(error.message);
    res.status(500).json({
        message: "Internal Server Error"
    });
    }







}

module.exports= {signup,login}