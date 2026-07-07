import { useState, useEffect } from "react";
import api from "../api/axios";

function Dashboard(){

    const [tasks, setTasks] = useState([]);
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [editingTask, setEditingTask] = useState(null);

     function getTasks() {
    try {

        const response = await api.get("/tasks")

        setTasks(response.data.tasks)

       

    }
    catch(error) {
        console.log(error.response.data.message)

    }
}

     useEffect(()=>{

            getTasks();
        
        
    },[])


    async function deleteTasks(id) {
    try {

        const response = await api.delete(`/tasks/${id}`)

        setTasks(

    tasks.filter(task => task.id !== id)

);

        

       

    }
    catch(error) {
        console.log(error.response.data.message)

    }
}

async function addTask(e) {

    e.preventDefault();

    try{

        const response = await api.post("/tasks",{
            title,description
        })

        setTasks(...tasks,[response.data.tasks])



    }
    catch(error)
    {



    }
    
}

async function  editTask(task) {


    try{

        setEditingTask(task);

        setTitle(task.title)

        setDescription(task.description)



    }
    catch(error)
    {

    }
    
}


async function  updateTask(e) {


    e.preventDefault();

    try{

    const response = await api.patch(`/tasks/${editingTask.id}`,{
            title,description, is_completed: editingTask.is_completed
        })

        setTasks((task)=>{
            task.id === editingTask.id
            ? response.data.task
            :task



        })

        setEditingTask(null);
        setTitle("");
        setDescription("");

    }
    catch(error)
    {

    }
    
}


 return (
        <div>

    <form onSubmit={editingTask ? updateTask : addTask}>

        
        <input value={title}placeholder='title' onChange={(event)=>setTitle(event.target.value)}/>
        <input value={description} placeholder='description' onChange={(event)=>setDescription(event.target.value)}/>
        <button > {editingTask ? "Update Task" : "Add Task"}</button>
       




    </form>





            {tasks.map((task) => 
            (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>

                    <button onClick={()=>deleteTasks(task.id)}>Delete</button>
                    <button onClick={(task) => editTask(task)}>Edit</button>
                </div>
            ))}
        </div>
    );

}

export default Dashboard