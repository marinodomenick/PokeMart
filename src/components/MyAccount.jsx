import React, { useEffect } from 'react'
import useAuth from '../Hooks/useAuth'
import { getUserById } from '../axios-services'


const MyAccount = () => {
  const { user } = useAuth();
  const id = user.id;
  console.log("the id is", id)


  return (
    <div>MyAccount</div>
    
  )
}

export default MyAccount