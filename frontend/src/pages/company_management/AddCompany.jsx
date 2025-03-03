import React, { useRef, useState } from "react";
import InputBox from "../../components/ui/InputBox"; // Assuming InputBox is a custom component
import { ToastContainer,toast } from "react-toastify";
import DatePickerInput from "../../components/ui/DatePickerInput"; // Assuming DatePickerInput is a custom component
  // Assuming ButtonComponent is a custom component
import ButtonComponent from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// --☑✅---SCHEMA-FORM-VALIDATION-START-------------------------------
const schema=yup.object().shape({
    companyName: yup.string().required("Company Name is Required").max(40,"Company Name must below 40 character "),
    companyDisplayName: yup.string().required("Company Display Name is Required").max(40,"Company Display Name must below 40 character "),
    contactPerson: yup.string().required("Contact Person is Required").max(30,"Name must below 30 character"),
    mobileNumber: yup
        .string()
        .required("Mobile Number is required")
        .matches(/^\d{10}$/, "Mobile number must be 10 digits"),

    email: yup.string().email("Invalid Email Format").required("Email is required").max(40,'Email must below 40 character'),
    website: yup.string().url("Invalid URL format").optional(),
    landlineNumber: yup.string().optional().max(20,"Landline number must below 20 digit"),
    registeredAddress: yup.string().required("Address is required").max(60,'Address must below 60 character'),
    aboutCompany : yup.string().optional().max(100,'About Company must below 100 character'),
    country: yup.string().required("Country is required").max(20,"Country must below 20 character"),
    state: yup.string().nullable().max(25,"State Name must be  25 character"),
    city: yup.string().optional().max(20,'City Name must below 20 character'),
    companyLogo: yup.mixed().test("FileSize","File size must be less than 2MB",(value)=>{
        return !value || (value && value[0] ?.size <=2 *1024 *1024);
    }),
    

});
// ---✅---SCHEMA-FORM-VALIDATION-END--------------------------------














const AddCompany = () => {
   
    // yup register -s
    const {
        register,
        handleSubmit,
        control,
        formState:{errors},
    }=useForm({
        resolver:yupResolver(schema),
        mode:"onChange",
       
    });
     // yup register -e

    const navigate=useNavigate();
    // const [formData, setFormData] = useState({
    //     companyName: "",
    //     companyDisplayName: "",
    //     contactPerson: "",
    //     mobileNumber: "",
    //     landlineNumber: "",
    //     email: "",
    //     website: "",
    //     registeredAddress: "",
    //     aboutCompany: "",
    //     companyLogo: "",
    //     country: "",
    //     state: "",
    //     city: ""
    // });

    // const [error, setError] = useState({});

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const onSubmit = async(data) => {
        // e.preventDefault();
        console.log(data); 

        
        // Validation and submission logic here
        // console.log(formData);
        // const companies = JSON.parse(localStorage.getItem("companies")) || [];
        // companies.push(formData);
        // localStorage.setItem("companies", JSON.stringify(companies));
        

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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Company Name and Display Name */}
                                    <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                               
                                                {...register('companyName')}
                                                label="Company Name"
                                                type="text"
                                                name="companyName"
                                               
                                                placeholder="Enter Company Name"
                                               
                                            />
                                            {errors.companyName && <p className="text-danger">{errors.companyName.message}</p>}   
                                            {/* <div className="invalid-feedback">{errors.companyName?.message}</div> */}
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                  {...register('companyDisplayName')}
                                                label="Company Display Name"
                                                type="text"
                                                name="companyDisplayName"
                                                placeholder="Enter Company Display Name"
                                            />
                                            <div className="invalid-feedback">{errors.companyDisplayName?.message}</div>
                                        </div>
                                    </div>

                                    {/* Contact Person and Mobile Number */}
                                    <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                             {...register('contactPerson')}
                                                label="Contact Person"
                                                type="text"
                                                name="contactPerson"
                                                placeholder="Enter Contact Person"
                                            />
                                          {errors.contactPerson && <p className="text-danger">{errors.contactPerson.message}</p>}   
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                  {...register('mobileNumber')}
                                                label="Mobile Number"
                                                type="text"
                                                name="mobileNumber"
                                                placeholder="Enter Mobile Number"
                                            />
                                            {errors.mobileNumber && <p className="text-danger">{errors.mobileNumber.message}</p>}   

                                            <div className="invalid-feedback">{errors.mobileNumber?.message}</div>
                                        </div>
                                    </div>

                                    {/* Landline Number, Email, and Website */}
                                    <div className="row my-3">
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                  {...register('landlineNumber')}
                                                label="Landline Number"
                                                type="text"
                                                name="landlineNumber"
                                                placeholder="Enter Landline Number"
                                            />
                                            {errors.landlineNumber && <p className="text-danger">{errors.landlineNumber.message}</p>}   
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                 {...register('email')}
                                                label="Email"
                                                type="email"
                                                name="email"
                                                placeholder="Enter Email"
                                            />
                                            {errors.email && <p className="text-danger">{errors.email.message}</p>}   
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                 {...register('website')}
                                                label="Website"
                                                type="text"
                                                name="website"
                                                placeholder="Enter Website"
                                            />
                                             {errors.website && <p className="text-danger">{errors.website.message}</p>}   
                                        </div>
                                    </div>

                                    {/* Registered Address and About Company */}
                                    <div className="row my-3">
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                                  {...register('registeredAddress')}
                                                label="Registered Address"
                                                type="text"
                                                name="registeredAddress"
                                                placeholder="Enter Registered Address"
                                            />
                                            {errors.registeredAddress && <p className="text-danger">{errors.registeredAddress.message}</p>}   
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <InputBox
                                              {...register('aboutCompany')}
                                                
                                                label="About Company"
                                                type="text"
                                                name="aboutCompany"
                                                placeholder="Enter About Company"
                                            />
                                            {errors.aboutCompany && <p className="text-danger">{errors.aboutCompany.message}</p>}   
                                        </div>
                                    </div>

                                  

                                    {/* Country, State, and City */}
                                    <div className="row my-3">
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                 {...register('country')}
                                                label="Country"
                                                type="text"
                                                name="country"
                                                placeholder="Enter Country"
                                            />
                                             {errors.country && <p className="text-danger">{errors.country.message}</p>}   
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                {...register('state')} 
                                             
                                                label="State"
                                                type="text"
                                                name="state"
                                                placeholder="Enter State"
                                            />
                                           {errors.state && <p className="text-danger">{errors.state.message}</p>}   
                                        </div>
                                        <div className="col-md-4 mt-2">
                                            <InputBox
                                                {...register('city')}
                                                label="City"
                                                type="text"
                                                name="city"
                                                placeholder="Enter City"
                                            />
                                            {errors.city && <p className="text-danger">{errors.city.message}</p>}   
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
                                            <input   {...register('companyLogo')}  type="file" name="companyLogo"  className="form-control" accept="image/*"/>
                                            {errors.companyLogo && <p className="text-danger">{errors.companyLogo.message}</p>}   
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="d-flex justify-content-end">
                                        <ButtonComponent color="primary" label="SAVE COMPANY DETAILS" type="sumbit" />
                                        {/* <button type="submit">submit</button> */}
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
