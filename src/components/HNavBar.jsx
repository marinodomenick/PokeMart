import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Link } from 'react-router-dom'

const HNavBar = () => {
    const { user } = useAuth()
  return (
    <nav className="HNavBar">
        <Link to="/home">Home</Link>
        { user.id ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
        { user.id ? <Link to="/myaccount">My Account</Link> : <Link to="/register">Register</Link>}
        <div>Cart Link</div>
        { user.id ? <h4>{user.username}</h4> : null}
    </nav>
  )
}
//fix reload page function

export default HNavBar