import React from 'react'
import "./loginregister.css"

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
        <h1> Login </h1>
        <form className='wow'>
            <input  required className="inp1"placeholder='username' type='text' />
            <input required className="inp1" placeholder='password' type='password' />
            <button className='login'>Login</button>
            <p className='plogin'> This is an Error!</p>
            <span className='spanlogin'>Don't you have a account? <Link to="/register">Register</Link></span>
        </form>
        
    </div>
  )
}

export default Login