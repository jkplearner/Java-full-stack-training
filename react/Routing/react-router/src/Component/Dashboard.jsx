import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard Soon....</h1>
        <Link to='dashboard/mobiles'>Mobiles</Link>
        <Link to='dashboard/laptops'>laptops</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard
