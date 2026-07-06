import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from '../api/axios';

const Login = () => {

const navigate = useNavigate();


const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

async function handleSubmit(event) {


    
    event.preventDefault()
    try{
    const response = await api.post("/auth/login",{
        email,password
    })

    localStorage.setItem("token",response.data.token)

    console.log(response.data.message);

    navigate("/");
    }
    catch(error)
    {
         console.log(error.response.data.message);
    }



}
  return (
    <div>

        <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>

        
        <input value={email}placeholder='Email' onChange={(event)=>setEmail(event.target.value)}/>
        <input value={password} type='password' placeholder='password' onChange={(event)=>setPassword(event.target.value)}/>
        <button>Login</button>



      </form>
    </div>
  )
}

export default Login
