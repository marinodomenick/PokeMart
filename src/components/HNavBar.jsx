import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Link } from 'react-router-dom'

const HNavBar = () => {
    const { user } = useAuth()
  return (
    <nav className='hNavi'>
        <div className="logo">
        <Link to="/home"><img
         style={{ 
          borderRadius: 50,
          width: 120, 
          height: 85,
        }}
         src="https://cdn.dribbble.com/users/56076/screenshots/2518329/pokemon_pokemart_tag_dribbble.jpg" alt="deptStoreLogo"/></Link>
        </div>
        <div className='banner'> Welcome to the Department Store!</div>
        <div className="hnav">
            <div className="loginLinks"></div>
        { user.id ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
        { user.id ? <h4>{user.username}</h4> : <Link to="/register">Register</Link> }
        <div className="loginLinks"></div>
       
        </div>
        <div className="cart">
        <Link to="/cart">Cart Link</Link>
        </div>
    </nav>
  )
}
//fix reload page function

export default HNavBar