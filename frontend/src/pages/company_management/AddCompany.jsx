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
import FileUpload from "../../components/ui/FileUpload";
import axios from "axios";

// --☑✅---SCHEMA-FORM-VALIDATION-START-------------------------------
const schema=yup.object().shape({
  company_name: yup.string().required("Company Name is Required").max(40,"Company Name must below 40 character "),
    company_display_name: yup.string().max(40,"Company Display Name must below 40 character ").required("Company Display Name is Required"),
    contact_person: yup.string().required("Contact Person is Required").max(30,"Name must below 30 character"),
    mobile_number: yup
        .string()
        .required("Mobile Number is required")
        .matches(/^\d{10}$/, "Mobile number must be 10 digits"),

    email: yup.string().email("Invalid Email Format").required("Email is required").max(40,'Email must below 40 character') .test("email-exists", "Email already exists", async (value) => {
      if (!value) return false;
      try {
        const token = sessionStorage.getItem("token");
          const response = await axios.post("/api/check-email", { email: value },{
            headers: {
                Authorization: `Bearer ${token}`, // Send JWT token
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("response :",response)
          return !response.data.exists; // If email exists, return false to show error
      } catch (error) {
          console.error("API error:", error);
          return true; // If API fails, allow form submission
      }
    }),
    website: yup.string().url("Invalid URL format").optional(),
    landline_number: yup.string().optional().max(20,"Landline number must below 20 digit"),
    registered_address: yup.string().required("Address is required").max(60,'Address must below 60 character'),
    about_company : yup.string().optional().max(100,'About Company must below 100 character'),
    gst : yup.string().required('GST number required'),
    pan : yup.string().required('PAN number required'),


    country: yup.string().required("Country is required").max(20,"Country must below 20 character"),
    state: yup.string().nullable().max(25,"State Name must be  25 character"),
    city: yup.string().optional().max(20,'City Name must below 20 character'),
    company_logo: yup.mixed().test("FileSize","File size must be less than 2MB",(value)=>{
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
        setError,
        clearErrors,
        formState:{errors},
        
    }=useForm({
        resolver:yupResolver(schema),
        mode:"onChange",
       
    });
     // yup register -e

     

     const [file,setFile]=useState(null);
     const[preview,setPreview]=useState(null);

      // Handle file change and generate preview
      const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
          
            setPreview(URL.createObjectURL(selectedFile));
        }
    };


    const navigate=useNavigate();
    // const [formData, setFormData] = useState({
    //     companyName: "",
    //     companyDisplayName: "",
    //     contact_person: "",
    //     mobile_number: "",
    //     landline_number: "",
    //     email: "",
    //     website: "",
    //     registered_address: "",
    //     about_company: "",
    //     company_logo: "",
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

        try {
            
          const formData = new FormData();
          formData.append("company_name", data.company_name);
          formData.append("company_display_name", data.company_display_name);
          formData.append("contact_person", data.contact_person);
          formData.append("mobile_number", data.mobile_number);
          formData.append("email", data.email);
          formData.append("website", data.website);
          formData.append("landline_number", data.landline_number);
          formData.append("registered_address", data.registered_address);
          formData.append("about_company", data.about_company);
          formData.append("gst", data.gst);
          formData.append("pan", data.pan);
          formData.append("country", data.country);
          formData.append("state", data.state);
          formData.append("city", data.city);

          // Ensure file is appended correctly
          if (data.company_logo[0]) {
              formData.append("company_logo", data.company_logo[0]); // `company_logo[0]` gets the first selected file
          }

          console.log([...formData.entries()]); // Debugging - See what's inside FormData


            const token = sessionStorage.getItem("token"); // Retrieve JWT token
    
            if (!token) {
                toast.error("Authentication failed! Please log in.", { position: "top-right" });
                return;
            }
    
            // Make API request to submit form data
            const response = await axios.post(
                "api/addcompany",  // Update with your API endpoint
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send JWT token
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            toast.success("Company Details Added Successfully..!",{   position: "top-right", // Customize position if needed
            });
            setTimeout(() => {
                navigate("/company");
              },3000);

        }catch (error) {
            console.error("Submission error:", error);
    
            // Show error notification
            toast.error("Failed to add company details. Please try again.", { position: "top-right" });
        }
        
      
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
                          {...register("company_name")}
                          label="Company Name"
                          type="text"
                          name="company_name"
                          placeholder="Enter Company Name"
                        />
                        {errors.company_name && (
                          <p className="text-danger">
                            {errors.company_name.message}
                          </p>
                        )}
                        {/* <div className="invalid-feedback">{errors.companyName?.message}</div> */}
                      </div>
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("company_display_name")}
                          label="Company Display Name"
                          type="text"
                          name="company_display_name"
                          placeholder="Enter Company Display Name"
                        />
                        {errors.company_display_name && (
                          <p className="text-danger">
                            {errors.company_display_name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Contact Person and Mobile Number */}
                    <div className="row my-3">
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("contact_person")}
                          label="Contact Person"
                          type="text"
                          name="contact_person"
                          placeholder="Enter Contact Person"
                        />
                        {errors.contact_person && (
                          <p className="text-danger">
                            {errors.contact_person.message}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("mobile_number")}
                          label="Mobile Number"
                          type="text"
                          name="mobile_number"
                          placeholder="Enter Mobile Number"
                        />
                        {errors.mobile_number && (
                          <p className="text-danger">
                            {errors.mobile_number.message}
                          </p>
                        )}

                        <div className="invalid-feedback">
                          {errors.mobile_number?.message}
                        </div>
                      </div>
                    </div>

                    {/* Landline Number, Email, and Website */}
                    <div className="row my-3">
                      <div className="col-md-4 mt-2">
                        <InputBox
                          {...register("landline_number")}
                          label="Landline Number"
                          type="text"
                          name="landline_number"
                          placeholder="Enter Landline Number"
                        />
                        {errors.landline_number && (
                          <p className="text-danger">
                            {errors.landline_number.message}
                          </p>
                        )}
                      </div>
                      <div className="col-md-4 mt-2">
                        <InputBox
                          {...register("email")}
                          label="Email"
                          type="email"
                          name="email"
                          placeholder="Enter Email"
                        />
                        {errors.email && (
                          <p className="text-danger">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="col-md-4 mt-2">
                        <InputBox
                          {...register("website")}
                          label="Website"
                          type="text"
                          name="website"
                          placeholder="Enter Website"
                        />
                        {errors.website && (
                          <p className="text-danger">
                            {errors.website.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Registered Address and About Company */}
                    <div className="row my-3">
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("registered_address")}
                          label="Registered Address"
                          type="text"
                          name="registered_address"
                          placeholder="Enter Registered Address"
                        />
                        {errors.registered_address && (
                          <p className="text-danger">
                            {errors.registered_address.message}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("about_company")}
                          label="About Company"
                          type="text"
                          name="about_company"
                          placeholder="Enter About Company"
                        />
                        {errors.about_company && (
                          <p className="text-danger">
                            {errors.about_company.message}
                          </p>
                        )}
                      </div>
                    </div>

                     {/* GST and PAN NO. */}
                     <div className="row my-3">
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("gst")}
                          label="GST Number"
                          type="text"
                          name="gst"
                          placeholder="Enter GST Number"
                        />
                        {errors.gst && (
                          <p className="text-danger">
                            {errors.gst.message}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mt-2">
                        <InputBox
                          {...register("pan")}
                          label="PAN Number"
                          type="text"
                          name="pan"
                          placeholder="Enter PAN Number"
                        />
                        {errors.pan && (
                          <p className="text-danger">
                            {errors.pan.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Country, State, and City */}
                    <div className="row my-3">
                      <div className="col-md-4 mt-2">
                        <InputBox
                          {...register("country")}
                          label="Country"
                          type="text"
                          name="country"
                          placeholder="Enter Country"
                        />
                        {errors.country && (
                          <p className="text-danger">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="col-md-4 mt-2">
                        <InputBox
                          {...register("state")}
                          label="State"
                          type="text"
                          name="state"
                          placeholder="Enter State"
                        />
                        {errors.state && (
                          <p className="text-danger">{errors.state.message}</p>
                        )}
                      </div>
                      <div className="col-md-4 mt-2">
                        <InputBox
                          {...register("city")}
                          label="City"
                          type="text"
                          name="city"
                          placeholder="Enter City"
                        />
                        {errors.city && (
                          <p className="text-danger">{errors.city.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company Logo */}
                    <div className="row my-3">
                      <div className="col-md-6 mt-2">
                        {/* <InputBox
                                                label="Company Logo"
                                                type="file"
                                                name="company_logo"
                                                onChange={handleInputChange}
                                            /> */}
                        <label>Company Logo</label>
                      <div>
                      {/* <FileUpload onChange={onFileChange}/> */}
                      </div>
                        <input
                          {...register("company_logo")}
                          onChange={(e) => {
                            onFileChange(e);
                          }}
                          type="file"
                          name="company_logo"
                          className="form-control"
                          accept="image/*"
                           
                        />
                        {errors.company_logo && (
                          <p className="text-danger">
                            {errors.company_logo.message}
                          </p>
                        )}
                        <div>
                          {/* Show Preview */}
                          {preview && (
                            <div>
                              <p>Preview:</p>
                              <img
                                src={preview}
                                alt="Company Logo Preview"
                                style={{
                                  width: "200px",
                                  height: "100px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="d-flex justify-content-end">
                      <ButtonComponent
                        color="primary"
                        label="SAVE COMPANY DETAILS"
                        type="sumbit"
                      />
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
