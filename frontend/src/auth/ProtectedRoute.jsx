import React from 'react'
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
    // const token=localStorage.getItem('token');
    const token=sessionStorage.getItem('token');
  return (
    token ? <Outlet /> : <Navigate  to={"/login"} replace/>
  )
}

export default ProtectedRoute