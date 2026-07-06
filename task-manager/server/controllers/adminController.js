const userModel = require('../models/userModel')
const taskModel = require('../models/taskModel')


const getAllUsers = async (req,res) =>
{

    try{


        const users = await userModel.getallusers();

        if(users.length===0)
        {
            return res.status(200).json({

                message : "no user found",
                users : []
            })
        }

        return res.status(200).json({

                message : "users found",
                users
            })





        }
       

    
    catch(error)
    {   
        console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

        console.log("error in controller")



    }



}


const blockUser = async (req,res) =>
{

    try{


        const {id} = req.params;

        const user = await userModel.blockuserbyid(id);

        if(!user)
        {
            return res.status(404).json({

                message : "no user found",
                
            })
        }

       

        

        return res.status(200).json({

                message : "user blocked",
                user
            })





        }
       

    
    catch(error)
    {   
        console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

        console.log("error in controller")



    }



}




const unblockUser = async (req,res) =>
{

    try{


        const {id} = req.params;

        const user = await userModel.unblockuserbyid(id);

        if(!user)
        {
            return res.status(404).json({

                message : "no user found",
                
            })
        }

       

        

        return res.status(200).json({

                message : "user unblocked",
                user
            })





        }
       

    
    catch(error)
    {   
        console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

        console.log("error in controller")



    }

}







const deleteUser = async (req,res)=>
{


    try{

        const {id} = req.params;

        const user = await userModel.deleteuserbyid(id);

        if(!user)
        {
            return res.status(404).json({

                message : "no user found",
                
            })
        }


        return res.status(200).json({

                message : "user deleted successfully",
                
            })




        

    }
    catch(error)
    {
        console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

        console.log("error in controller")

    }





}


const getAlltasks = async (req,res)=>
{

    try{


        const tasks = await taskModel.getalltasks();

        if(tasks.length==0)
        {
            return res.status(200).json({

                message : "no task avaialable",
                tasks : []
                
            })
        }


        return res.status(200).json({

                message : "tasks fetched successfully",

                tasks
                
            })








    }
    catch(error)
    {

        console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

    }





}


const deleteTask = async(req,res)=>{

try{




    const {id} = req.params

    

    const task = await taskModel.deleteTaskadmin(id)

    if(!task)
    {

        return res.status(400).json({

        message : "No task found",
        
        

    })


    }

    

    return res.status(200).json({

        message : "Task deleted successfully",
        task,
        

    })


}
catch(error){
 console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

        console.log("error in controller")

}

}



module.exports = {getAllUsers,blockUser,unblockUser,deleteUser,getAlltasks,deleteTask}





