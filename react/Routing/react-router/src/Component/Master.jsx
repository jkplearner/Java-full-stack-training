import React from 'react'
import { Router,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error'
const Master = () => {
  return (
    <div>
        <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/error" element={<Error />} />
        </Routes> 
            
    </div>
  )
}

export default Master
