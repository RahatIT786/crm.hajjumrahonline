import React, { useState } from "react";
import InputBox from "../../components/ui/InputBox"; // Assuming InputBox is a custom component
import { ToastContainer,toast } from "react-toastify";
import DatePickerInput from "../../components/ui/DatePickerInput"; // Assuming DatePickerInput is a custom component
  // Assuming ButtonComponent is a custom component
import ButtonComponent from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
const AddCompany = () => {

    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        companyName: "",
        companyDisplayName: "",
        contactPerson: "",
        mobileNumber: "",
        landlineNumber: "",
        email: "",
        website: "",
        registeredAddress: "",
        aboutCompany: "",
        companyLogo: "",
        country: "",
        state: "",
        city: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation and submission logic here
        console.log(formData);
        const companies = JSON.parse(localStorage.getItem("companies")) || [];
        companies.push(formData);
        localStorage.setItem("companies", JSON.stringify(companies));
        

        toast.success("Company Details Added Successfully..!",{   position: "top-right", // Customize position if needed
            });
            setTimeout(() => {
                navigate("/company");
              },3000);
      
    };
    

    return (
        <div className="container py-1">
             <ToastContainer position="top-right" autoClose={2000} />
            <div className="page-inner">
                <div className="page-header d-flex justify-content-between mb-4">
                    {/* Add header content here */}
                </div>

                <div className="row justify-content-center my-5 py-5">
                    <div className="col-md-8">
                        <div className="card shadow-lg border-0 rounded-lg">
                            <div className="card-header bg-primary text-white text-center py-3">
                                <h3>Company Details</h3>
                            </div>
                            <div className="card-body p-5">
                                <form onSubmit={handleSubmit}>
                                    {/* Company Name and Display Name */}
                                    <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                label="Company Name"
                                                type="text"
                                                name="companyName"
                                                value={formData.companyName}
                                                placeholder="Enter Company Name"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.companyName}</div>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                label="Company Display Name"
                                                type="text"
                                                name="companyDisplayName"
                                                value={formData.companyDisplayName}
                                                placeholder="Enter Company Display Name"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.companyDisplayName}</div>
                                        </div>
                                    </div>

                                    {/* Contact Person and Mobile Number */}
                                    <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                label="Contact Person"
                                                type="text"
                                                name="contactPerson"
                                                value={formData.contactPerson}
                                                placeholder="Enter Contact Person"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.contactPerson}</div>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                label="Mobile Number"
                                                type="text"
                                                name="mobileNumber"
                                                value={formData.mobileNumber}
                                                placeholder="Enter Mobile Number"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.mobileNumber}</div>
                                        </div>
                                    </div>

                                    {/* Landline Number, Email, and Website */}
                                    <div className="row my-3">
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                label="Landline Number"
                                                type="text"
                                                name="landlineNumber"
                                                value={formData.landlineNumber}
                                                placeholder="Enter Landline Number"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.landlineNumber}</div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                label="Email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder="Enter Email"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.email}</div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                label="Website"
                                                type="text"
                                                name="website"
                                                value={formData.website}
                                                placeholder="Enter Website"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.website}</div>
                                        </div>
                                    </div>

                                    {/* Registered Address and About Company */}
                                    <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                label="Registered Address"
                                                type="text"
                                                name="registeredAddress"
                                                value={formData.registeredAddress}
                                                placeholder="Enter Registered Address"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.registeredAddress}</div>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                label="About Company"
                                                type="text"
                                                name="aboutCompany"
                                                value={formData.aboutCompany}
                                                placeholder="Enter About Company"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.aboutCompany}</div>
                                        </div>
                                    </div>

                                  

                                    {/* Country, State, and City */}
                                    <div className="row my-3">
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                label="Country"
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                placeholder="Enter Country"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.country}</div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                label="State"
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                placeholder="Enter State"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.state}</div>
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                label="City"
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                placeholder="Enter City"
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">{errors.city}</div>
                                        </div>
                                    </div>

                                      {/* Company Logo */}
                                      <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            {/* <InputBox
                                                label="Company Logo"
                                                type="file"
                                                name="companyLogo"
                                                onChange={handleInputChange}
                                            /> */}
                                            <label >Company Logo</label>
                                            <input type="file"  className="form-control" accept="image/*"/>
                                            <div className="invalid-feedback">{errors.companyLogo}</div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="d-flex justify-content-end">
                                        <ButtonComponent color="primary" label="SAVE COMPANY DETAILS" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCompany;
