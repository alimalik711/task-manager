import { useState, useEffect } from "react";
import api from "../api/axios";

function Dashboard(){

    const [tasks, setTasks] = useState([]);

    async function getTasks() {
    try {

        const response = await api.get("/tasks")

        setTasks(response.data.tasks)

        useEffect(()=>{

            getTasks()
        }
        
        )

    }
    catch(error) {

    }
}



     tasks.map((task)=>{


        return(

            <div>

                <h1>task.title</h1>

                <h1>task.description</h1>




            </div>



        );
}

export default Dashboard