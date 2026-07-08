
const taskModel = require("../models/taskModel")


const createTask = async(req,res)=>{

try{

    const{title , description} = req.body

    if(!title)
    {

        return res.status(400).json({

            message : " title is required"
        })


    }

    const userid = req.user.userid

    const task = await taskModel.createTask(title,description,userid)

    console.log(task)
    return res.status(201).json({

        message : "task created successfully",
        task ,
        

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


const getTasks = async(req,res)=>{

try{




    const userid = req.user.userid

    const tasks = await taskModel.getTasks(userid)

    console.log(tasks)

    return res.status(200).json({

        message : "tasks are fetched",
        tasks ,
        

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



const getoneTask = async(req,res)=>{

try{




    const {id} = req.params

    const userid = req.user.userid

    console.log("taskId:", id);
    console.log("userId:", userid);

    const task = await taskModel.getoneTask(id,userid)

    console.log(task)

    return res.status(200).json({

        message : "task is fetched",
        task
        

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



const updateTask = async(req,res)=>{

try{

    const {id} = req.params

    const userid = req.user.userid

    const {title,description,is_completed} =req.body

    const task = await taskModel.updateTask(id,userid,title,description,is_completed)

    

    return res.status(200).json({

        message : "task updated",
        task,
        

    })


}
catch{
 console.error(error.message);
        res.status(500).json({
            message : "Internal Server Error"
        })

        console.log("error in controller")

}

}


const deleteTask = async(req,res)=>{

try{




    const {id} = req.params

    const userid = req.user.userid

    

    const task = await taskModel.deleteTask(id,userid)

    
    if(!task)
    {

        return res.status(400).json({

        message : "No task found",
        task,
        

    })
}

    

    return res.status(200).json({

        message : "task deleted",
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

module.exports= {

    createTask,getTasks,getoneTask,updateTask,deleteTask
}