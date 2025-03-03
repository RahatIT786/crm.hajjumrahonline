import React, { useEffect, useState } from "react";
import AddFormButton from "../../components/ui/AddFormButton";
import DelBtn from "../../components/ui/button/DelBtn";
import EditBtn from "../../components/ui/button/EditBtn";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const StaffList = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div className="card-title">STAFF LIST</div>
          <div>
            <AddFormButton link="/staff_management/staff_add" buttonName="+ ADD STAFF" />
          </div>
        </div>
        {/* <div className="card-body">
          <table className="table table-head-bg-primary mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th>COMPANY NAME</th>
                <th>DISPLAY NAME</th>
                <th>CONTACT PERSON</th>
                <th>MOBILE NUMBER</th>
                <th>WEBSITE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {companies.length > 0 ? (
                companies.map((company, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{company.companyName}</td>
                    <td>{company.companyDisplayName}</td>
                    <td>{company.contactPerson}</td>
                    <td>{company.mobileNumber}</td>
                    <td>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        {company.website}
                      </a>
                    </td>
                    <td>
                      <DelBtn  onClick={() => handleDeleteCompany(index)} />
                      <EditBtn onClick={() => navigate(`/editcompany/${index}`)}/>
                      <FiEye 
                      style={{ cursor: "pointer", color: "green" }}
                      onClick={() => navigate(`/company-details/${index}`)}
                      
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No companies available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  )
}

export default StaffList
