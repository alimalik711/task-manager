import { useState, useEffect } from "react";
import api from "../api/axios";

function Dashboard(){

    const [tasks, setTasks] = useState([]);
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [editingTask, setEditingTask] = useState(null);

    async function getTasks() {
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
         console.log("GET response:", response.data);

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
        console.log(response.data);


        console.log("GET response:", response.data);
console.log("response.data.tasks:", response.data.tasks);
console.log("is array:", Array.isArray(response.data.tasks));
        setTasks(prev => [...prev, response.data.task]);



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

        setTasks(prev =>
            prev.map(task =>
                task.id === editingTask.id
                    ? response.data.task
                    : task
            )
        );

        setEditingTask(null);
        setTitle("");
        setDescription("");

    }
    catch(error)
    {

    }
    
}

console.log(tasks);
console.log(Array.isArray(tasks));
 return (
        <div>

    <form onSubmit={editingTask ? updateTask : addTask}>

        
        <input value={title}placeholder='title' onChange={(event)=>setTitle(event.target.value)}/>
        <input value={description} placeholder='description' onChange={(event)=>setDescription(event.target.value)}/>
        <button > {editingTask ? "Update Task" : "Add Task"}</button>
       




    </form>





           {Array.isArray(tasks) &&
  tasks.map(task => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>

                    <button onClick={()=>deleteTasks(task.id)}>Delete</button>
                    <button onClick={() => editTask(task)}>Edit</button>
                </div>
            ))}
        </div>
    );

}

export default Dashboard