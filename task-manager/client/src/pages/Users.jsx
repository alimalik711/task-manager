import { useState,useEffect } from "react";
import api from "../api/axios";


const Users = () => {


  const [users, setUsers] = useState([]);

  async function getUsers()
  {

    try{
    const response = await api.get("/admin/users")
    console.log(response)

    console.log(response.data.users);

    setUsers(response.data.users)
    }
    catch(error)
    {
      console.log(error.response.message)

    }
  }



  async function deleteUsers(id)
  {

    try{

      
    const response = await api.delete(`/admin/users/${id}`)
      
    setUsers(

      users.filter((user)=> user.id != id)
      
    )
    }
    catch(error)
    {
      console.log(error.response.data.message)

    }
  }


  
  
  async function unblockUser(id)
  {

    try{

    const response = await api.patch(`admin/users/${id}/unblock`)

    getUsers();
    }
    catch(error)
    {
      console.log(error.response.data.message)

    }
  }


  async function blockUser(id)
  {

    try{

    const response = await api.patch(`admin/users/${id}/block`)

    getUsers();
    }
    catch(error)
    {
      console.log(error.response.data.message)

    }
  }


  useEffect(()=>{

    getUsers();

  },[])




  return (
    <div>

      <h1>All Users</h1>

     { users.map((user)=>(

  

        <div key={user.id}>

           <h3>{user.name}</h3>

           <p>{user.email}</p>


           <button onClick={() => deleteUsers(user.id)}>Delete User</button>
           <button
            onClick={
              user.is_blocked
                ? () => unblockUser(user.id)
                : () => blockUser(user.id)
            }
          >
            {user.is_blocked ? "Unblock" : "Block"}
          </button>



        </div>



      ))
    }
    </div>
  )
}

export default Users
