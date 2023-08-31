import React, { useState } from 'react'
import "./loginregister.css"
import { Link } from 'react-router-dom'

const Register = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function register(e){
    e.preventDefault();
    await fetch("http://localhost:4000",{
      method:"POST",
      body:"JSON.stringify({username,email,password})",
      header:{"Content-Type":"application/json"}
    })
  }
  return (
    <div className='auth'>
        <h1> Register </h1>
        <form className='register' onSubmit={register}>
            <input  required className="inp1"
                 placeholder='username' 
                type='text' 
                value={username} onChange={e => setUsername(e.target.value)}
              />
            <input  required className="inp1"
              placeholder='email' type='text'
              value={email} onChange={e => setEmail(e.target.value)}
             />
            <input required className="inp1" 
              placeholder='password' type='password' 
              value={password} onChange={e => setPassword(e.target.value)}
            />
            <button className='login'>Register</button>
            <p className='plogin'> This is an Error!</p>
            <span>Don't you have a account? <Link to="/login">Login</Link></span>
        </form>
        
    </div>
  )
}

export default Register