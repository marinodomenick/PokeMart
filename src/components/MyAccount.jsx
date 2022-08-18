import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import { getUserById } from '../axios-services'
import { Link } from 'react-router-dom'


const MyAccount = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({})
  const id = user.id
  useEffect(()=>{
    async function getData() {
      if(user) {
      const userObj = await getUserById(id);
      setUserData(userObj)
      }
    }
    getData()
  }, [user])
  console.log("user data", userData)
  return (
    <div> My Account <br/>
        <Link to="/editaccount">Edit Account Information</Link>
      <div>
        {userData?.username}
        <br/>
        {userData?.name}
        <br/>
        {userData?.address}
        <br/>
        {userData?.email}
        <br/>
        {userData?.orders}
        <br/>
        {userData?.reviews}
        
      </div>
    </div>
    
  )
}

export default MyAccount