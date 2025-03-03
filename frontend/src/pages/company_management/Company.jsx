import React, { useEffect, useState } from "react";
import AddFormButton from "../../components/ui/AddFormButton";
import DelBtn from "../../components/ui/button/DelBtn";
import EditBtn from "../../components/ui/button/EditBtn";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Company = () => {
  
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Load companies from localStorage
    let savedCompanies = JSON.parse(localStorage.getItem("companies")) || [];

    // If no data exists, add dummy data
    if (savedCompanies.length === 0) {
      savedCompanies = [
        {
          companyName: "Company One",
          companyDisplayName: "Company One Display",
          contactPerson: "John Doe",
          mobileNumber: "1234567890",
          landlineNumber: "0987654321",
          email: "john@example.com",
          website: "https://companyone.com",
          registeredAddress: "123 Main St.",
          aboutCompany: "A brief description of Company One.",
          companyLogo: "logo1.png",
          country: "USA",
          state: "California",
          city: "Los Angeles",
        },
        {
          companyName: "Company Two",
          companyDisplayName: "Company Two Display",
          contactPerson: "Jane Smith",
          mobileNumber: "9876543210",
          landlineNumber: "1122334455",
          email: "jane@example.com",
          website: "https://companytwo.com",
          registeredAddress: "456 Second St.",
          aboutCompany: "A brief description of Company Two.",
          companyLogo: "logo2.png",
          country: "UK",
          state: "England",
          city: "London",
        },
        {
            companyName: "Company Two",
            companyDisplayName: "Company Two Display",
            contactPerson: "Jane Smith",
            mobileNumber: "9876543210",
            landlineNumber: "1122334455",
            email: "jane@example.com",
            website: "https://companytwo.com",
            registeredAddress: "456 Second St.",
            aboutCompany: "A brief description of Company Two.",
            companyLogo: "logo2.png",
            country: "UK",
            state: "England",
            city: "London",
          },
          {
            companyName: "Company Two",
            companyDisplayName: "Company Two Display",
            contactPerson: "Jane Smith",
            mobileNumber: "9876543210",
            landlineNumber: "1122334455",
            email: "jane@example.com",
            website: "https://companytwo.com",
            registeredAddress: "456 Second St.",
            aboutCompany: "A brief description of Company Two.",
            companyLogo: "logo2.png",
            country: "UK",
            state: "England",
            city: "London",
          },
      
      ];

      // Store dummy data in localStorage
      localStorage.setItem("companies", JSON.stringify(savedCompanies));
    }

    console.log("Saved Companies:", savedCompanies); // Debugging line

    setCompanies(savedCompanies);
  }, []);





  const handleDeleteCompany = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCompanies = companies.filter((_, i) => i !== index);

        // Update state and localStorage
        setCompanies(updatedCompanies);
        localStorage.setItem("companies", JSON.stringify(updatedCompanies));
        Swal.fire("Deleted!", "The company has been deleted.", "success");
      }
    });
  };
  return (
    <div>
        
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div className="card-title">COMPANY LIST</div>
          <div>
            <AddFormButton link="/addcompany" buttonName="+ ADD COMPANY" />
          </div>
        </div>
        <div className="card-body">
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
        </div>
      </div>
    </div>
  );
};

export default Company;
