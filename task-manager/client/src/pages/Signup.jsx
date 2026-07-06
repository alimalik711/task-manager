import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from '../api/axios';




const Signup = () => {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
 const navigate = useNavigate();

async function handleSubmit(event) {

    event.preventDefault()

   
   
    
    try{
    const response = await api.post("/auth/signup",{
        name,email,password
    })

    console.log(response.data.message);

    navigate("/login");
    }
    catch(error)
    {
         console.log(error)
    }



}
  return (
    <div>

        <h1>SIGNUP PAGE</h1>
      <form onSubmit={handleSubmit}>

        <input value={name} placeholder='name' onChange={(event)=>setName(event.target.value)}/>
        <input value={email}placeholder='Email' onChange={(event)=>setEmail(event.target.value)}/>
        <input value={password} type='password' placeholder='password' onChange={(event)=>setPassword(event.target.value)}/>
        <button>Signup</button>



      </form>
    </div>
  )
}

export default Signup
