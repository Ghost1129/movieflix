import React, {  } from 'react'
import '../styles/Navbar.css'
import { Link, useNavigate, } from 'react-router-dom'
import Icon from '../assets/icons8-fiber-smart-record-96.png'
import MenuIcon from '../assets/icons8-menu-rounded-50.png'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async() => {
    try{
      await logOut()
      navigate('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='Nav_Container'>
        
        <img src={Icon} alt="icon" />
        <input type="text" placeholder='Search' className='Nav_search'/>
        {/* <div className='Nav_Searchbox'>
          <input type="text" placeholder='Search' />
        </div> */}
        
        <div className='Nav_Inner'>
          <Link to='/home'>Home</Link>
          <Link to=''>Language</Link>
          <Link to=''>Genre</Link>
          <a href="" className='Account'>Account
            <div className='Account_inner' >
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          </a>
            <div className='Nav_Inner_Menu' >
                <img src={MenuIcon} alt="search" />
            </div>

        </div>
    </div>
  )
}

export default Navbar