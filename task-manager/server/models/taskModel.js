
const pool = require('../config/db');
const { getAlltasks } = require('../controllers/adminController');



const createTask = async(title,description,userid)=>

{
try{

    const result = await pool.query("INSERT INTO tasks (title,description,user_id) VALUES ($1,$2,$3) RETURNING * ",[title,description,userid])

    return result.rows[0];


}
catch(error){

    throw error;

}


}



const getTasks = async(userid)=>

{
try{

    const result = await pool.query("SELECT * FROM  tasks WHERE user_id =$1 ",[userid])

    return result.rows;


}
catch(error){

    throw error;

}


}


const getoneTask = async(taskId,userid)=>

{
try{

    const result = await pool.query("SELECT * FROM  tasks WHERE id = $1 AND user_id =$2 ",[taskId,userid])

    return result.rows[0];


}
catch(error){

    throw error;

}


}


const updateTask = async(taskId,userid,title,description,is_completed)=>

{
try{

    const result = await pool.query("UPDATE tasks SET title=$1 , description=$2 , is_completed=$3 WHERE id=$4 AND user_id=$5 RETURNING * ",[title,description,is_completed,taskId,userid])

    return result.rows[0];


}
catch(error){

    throw error;

}


}


const deleteTask = async(taskId,userid)=>

{
try{

    console.log(taskId)
    console.log(userid)

    const result = await pool.query(" DELETE FROM  tasks WHERE id =$1 AND user_id =$2 RETURNING * ",[taskId,userid])

    return result.rows[0];


}
catch(error){

    throw error;

}

}

const getalltasks = async()=>

{
try{

    const result = await pool.query(`SELECT 
                                    t.id,
                                    t.title,
                                    t.description,
                                    t.is_completed,
                                    t.created_at, 
                                    m.name,
                                    m.email
                                    FROM  tasks t
                                    JOIN myuser m
                                    ON m.id = t.user_id 
                                      `)

    return result.rows;


}
catch(error){

    throw error;

}


}





const deleteTaskadmin = async(taskId)=>

{
try{

    const result = await pool.query(" DELETE FROM  tasks WHERE id =$1 RETURNING * ",[taskId])

    return result.rows[0];


}
catch(error){

    throw error;

}
}
module.exports = {createTask,getTasks,getoneTask,updateTask,deleteTask,getalltasks,deleteTaskadmin}