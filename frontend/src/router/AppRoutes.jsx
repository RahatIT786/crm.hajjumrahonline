import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
const AppRoutes = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}> 
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
        </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes