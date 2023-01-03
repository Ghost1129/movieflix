import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import '../styles/Register.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await logIn(email, password)
      navigate('/home')
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='Main_form'>
    <div className='Form'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' required onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder='Password' required onChange={(e)=> setPassword(e.target.value)} />
        <button>Login</button>
        <p>
          Not have an account?
          <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Login