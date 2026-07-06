

const isAdmin = async(req,res,next)=>
{


    try{



        const role = req.user.role

        if(role!=="admin")
        {

            return res.status(403).json({

                message : "Only admin can access"
            })
        }


        next();




    }
    catch(error){

        console.error(error)

         return res.status(500).json({

                message : "Internal Server error"
            })

        


    }












}