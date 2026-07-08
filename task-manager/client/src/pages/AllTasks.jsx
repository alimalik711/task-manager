import { useEffect, useState } from "react";
import api from "../api/axios";

function AllTasks() {

    const [tasks, setTasks] = useState([]);

    async function getAllTasks() {

        try {

            const response = await api.get("/tasks");

            setTasks(response.data.tasks);

        } catch (error) {

            console.log(error);

        }

    }

    useEffect(() => {

        getAllTasks();

    }, []);




  async function deleteTask(id)
  {

    try{

    const response = await api.delete(`/tasks/${id}`)

    setTasks(

      tasks.filter((user)=> {users.id != id})
      
    )
    }
    catch(error)
    {
      console.log(error.response.data.message)

    }
  }



    return (

        <div>

            <h1>All Tasks</h1>

  {
    tasks.map((task) => (

        <div key={task.id}>

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>User: {task.name}</p>

            <p>Email: {task.email}</p>

            <p>
                {task.is_completed ? "Completed" : "Pending"}
            </p>

            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>

        </div>

    ))
}

        </div>

    );

}

export default AllTasks;