import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/applayout/applayout'
import Home from '../pages/Home'
import About from '../pages/About'

// Company Management Section
import Branches from '../pages/company_management/Branches'
import BranchesForm from '../pages/company_management/BranchesForm'


//Inventory Management
import PackageComponent from '../pages/inventory_management/package_management/PackageComponent'
import PackageForm from '../pages/inventory_management/package_management/packageForm';

//Staff Management
import Role from '../pages/staff_management/Role'
import Department from '../pages/staff_management/Department'

//PNR Management
import PnrList from '../pages/pnr_management/PnrList'
import PnrFormPopup from '../pages/pnr_management/PnrFormPopup'
import BookingList from '../pages/pnr_management/BookingList'
import Login from '../auth/Login'
import ProtectedRoute from '../auth/ProtectedRoute'
const AppRoutes = () => {
  // const ProtectedRoute=({element})=>{
  //   const [isAuthenticated, setIsAuthenticated] =useState(false);
  //   useEffect(()=>{
  //     const token=localStorage.getItem("token");
  //     setIsAuthenticated(!!token);
  //   },[]);

  //   return isAuthenticated ? element : <Navigate to={"/login"}/>;
  // }

  // ✅ Corrected Protected Route Component
// const UserProtectedRoute = () => {
//   const token = localStorage.getItem("token");
//   localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzQwNjYyMTQ5LCJleHAiOjE3NDA2NjU3NDksIm5iZiI6MTc0MDY2MjE0OSwianRpIjoiZFIwSnNBd1NQS0Rtem1lViIsInN1YiI6IjE1IiwicHJ2IjoiNzMwNWFmZmYwNGQ2MDQ4MDg0MzVkY2U5MzExMTlhNTRlMjQ5YjFjMiIsInJvbGUiOjF9.pI988mG_R_ROvfvkLHk1EhtvaoFWEoBqrQisQHwGQBA");

//   return token ? <Outlet /> : <Navigate to="/login" replace />;
// };


  return (
   <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />

            <Route  element={
                  <ProtectedRoute  />
                  }> 
                  <Route element={<AppLayout/>}>
                <Route index element={<Home />} />
                <Route path='/dashboard' element={<Home />} />
                <Route path="about" element={<About />} />

                {/* Company Management Routes */}
                <Route path="/company_management/branch" element={<Branches />}/>
                <Route path="/company_management/branch-add" element={<BranchesForm />}/> 


                {/* Staff Management Routes */}
                <Route path='/staff_management/role' element={<Role/>} />
                <Route path='/staff_management/department' element={<Department/>}/>


                {/* Inventory Management */}
                <Route path="/inventory_management/packages" element={<PackageComponent />} />
                <Route path="/inventory_management/add_packages" element={<PackageForm />} />


                {/* PNR MANAGEMENT */}
                <Route path="/pnr_management/pnr_list" element={<PnrList />} />
                <Route path="/pnr_management/pnr_form" element={<PnrFormPopup />} />
                <Route path='/pnr_management/booking_list' element={<BookingList />} />
            </Route>
            </Route>
              

               {/* ✅ Catch-all for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes