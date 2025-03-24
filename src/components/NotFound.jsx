import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h2>404 | Page not found</h2>
      <br />
      <button 
       onClick={()=>navigate('/')}
       >
        Go To Homepage
      </button>
    </div>
    
  )
}

export default NotFound
