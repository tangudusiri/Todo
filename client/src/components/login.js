import React, { useState } from "react"
import "./login.css"
const Login=()=>{
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
      const  {name,value}=e.target
      setUser({
        ...user,[name]:value
      })
    }
    const handleLogin=()=>{
    const {email,password}=user
    if(email && password){
        alert("logined")
    }else{
        alert("all inputs required")
    }
    
    }
    return(
        <div className="main-box">
        <div className="login-wrap">
        <h2>User Login</h2>
        <input type="text" placeholder="Enter Username" name="email" value={user.email} onChange={handleChange} ></input>
        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange}></input>
        <div className="btn" onClick={handleLogin}>Login</div>
        <p className="text">Forget Password?</p>
        </div>
        </div>
    )
}
export default Login