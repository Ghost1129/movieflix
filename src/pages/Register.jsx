import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import '../styles/Register.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='Main_form'>
    <div className='Form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' required onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" placeholder='Password' required onChange={(e)=> setPassword(e.target.value)} />
        <button>Sign Up</button>
        <p>
          Already have an account?
          <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Register