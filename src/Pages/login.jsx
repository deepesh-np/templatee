import React from 'react'
import { Outlet } from 'react-router'

const login = () => {
  return (
    <div>
        <h1>Welcome</h1>
      <h1>Login page</h1>
      <Outlet/>
    </div>
  )
}

export default login
