import React, { useState } from 'react'
import InputBox from '../../components/ui/InputBox'
import FileUpload from '../../components/ui/FileUpload'
import ButtonComponent from '../../components/ui/Button'
import Summernote from '../../components/ui/Summernote'
import SingleSelect from '../../components/ui/SingleSelect'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'  
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const schema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().required("Invalid email format").email("Email is required"),
    mobile: yup.string().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits").required("Mobile number is required"),
    role: yup.string().required("Role is required"),
    salary: yup.number().positive().integer().required("Salary is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    department: yup.string().required("Department is required"),
    office_no: yup.string().required("Office No is required"),
    details: yup.string().required("Details are required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    postal_code: yup.string().matches(/^[0-9]{6}$/, "Postal Code must be 6 digits").required("Postal Code is required"),
    address:yup.string().required("Address is Required"),
});

const AddStaff = () => {

    // const [firstName,setFirstName] = useState('');
    // const [lastName,setLastName] = useState('');
    // const [email,setEmail] = useState('');
    // const [mobile, setMobile] = useState('');
    const [selectRoles, setSelectRoles] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    // const [salary, setSalary] = useState('');
    // const [password, setPassword] = useState('');
    // const [officeNo, setOfficeNo] = useState('');
    // const [details, setdetails] = useState('');
    // const [country, setCountry] = useState('');
    // const [City, setCity] = useState('');
    // const [postalCode, setPostalCode] = useState('');

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode:"onChange"
    });

    const [imageFile, setImageFile] = useState(null);

// const handleImageChange = (files) => {
//     if (files && files.length > 0) {
//         const file = files[0]; // Get first file
//         setImageFile(file);
//         setValue("packageImage", file); // Set file in react-hook-form
//     }
// };

const handleImageChange = (file) => {
    if (file && file.length > 0) {
        // const file = files[0]; // Get the selected file
        // setImageFile(file); // Store the image in state
        setValue("packageImage", file); // Update react-hook-form field
    } else {
        console.error("No file selected");
    }
};

    const onSubmit = async (data) => {
        // formData.append("packageImage", imageFile); 
        console.log("Form Data:", data);
        const token = sessionStorage.getItem("token");
        console.log("Form token:", token);
        try{
            // axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            const response = await axios.post("/api/staff", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`,
                },
            });
            sessionStorage.setItem("token", data.token);
            console.log("Upload success:", response.data);
        }catch(e){
            console.error('Error sending Data: ',e);
            alert(e.response.data.message);
        }
    };
    
    return (
        <div>
            <div className="page-header d-flex justify-content-between mb-4">
                <div>
                    <ul className="breadcrumbs mb-3" style={{ paddingLeft: '0px' }}>
                        <li className="nav-home">
                            <a href="#"><i className="icon-home"></i></a>
                        </li>
                        <li className="separator"><i className="icon-arrow-right"></i></li>
                        <li className="nav-item"><a href="#">Staff  Management</a></li>
                        <li className="separator"><i className="icon-arrow-right"></i></li>
                        <li className="nav-item"><a href="#"></a></li>
                    </ul>
                </div>
            </div>

            <div className="row justify-content-center my-5 py-5">
                <div className="col-md-10">
                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className="card-header bg-primary text-white text-center py-3">
                            <h3>Create Staff </h3>
                        </div>
                        <div className="card-body p-5">
                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="row my-0">

                                    <div className="col-md-4">
                                        <InputBox
                                            {...register('first_name')}
                                            label="Staff First Name"
                                            type="text"
                                            placeholder="Staff First Name"
                                        />
                                        {errors.first_name && <p className="text-danger">{errors.first_name.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('last_name')}
                                            label="Staff Last Name"
                                            type="text"
                                            placeholder="Staff Last Name"
                                        />
                                        {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('email')}
                                            label=" Email"
                                            type="email"
                                            placeholder="Enter Staff Email"
                                        />
                                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                    </div>

                                </div>


                                <div className="row my-5">

                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('mobile')}
                                            label="Mobile"
                                            type="number"
                                            placeholder="Enter Mobile Number"
                                        />
                                        {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
                                    </div>

                                    <div className="col-md-4">
                                        <SingleSelect
                                        {...register('role')}
                                            label="Role"
                                            options={[
                                                { value: 1, label: "Account Manager" },
                                                { value: 2, label: "Sales Associate" },
                                                { value: 3, label: "Admin" },
                                                { value: 4, label: "Tell Caller" },
                                                { value: 5, label: "Relationship Manager" },
                                            ]}
                                            selectedValue={selectRoles}
                                            // setSelectedValue={setSelectRoles} 
                                            setSelectedValue={(value) => {
                                                setSelectRoles(value);
                                                setValue("role", value);
                                            }}
                                        />
                                        {errors.role && <p className="text-danger">{errors.role.message}</p>}
                                    </div>

                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('salary')}
                                            label="Salary"
                                            type="number"
                                            placeholder="Enter Salary"
                                        />
                                        {errors.salary && <p className="text-danger">{errors.salary.message}</p>}
                                    </div>
                                </div>


                                <div className="row my-5">

                                    <div className="col-md-6">
                                        <InputBox
                                        {...register('password')}
                                            label="Password"
                                            type="text"
                                            placeholder="Enter Password"
                                        />
                                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                    </div>

                                    <div className="col-md-6">
                                        <SingleSelect
                                            label="Department"
                                            options={[
                                                { value: "Sales", label: "Sales" },
                                                { value: "Accounts", label: "Accounts" },
                                                { value: "Procurement", label: "Procurement" },
                                            ]}
                                            selectedValue={selectedDepartment}  // ✅ Corrected
                                            // setSelectedValue={setSelectedDepartment}  // ✅ Corrected
                                            setSelectedValue={(value) => {
                                                setSelectedDepartment(value);
                                                setValue("department", value);
                                            }}
                                        />

                                        {errors.department && <p className="text-danger">{errors.department.message}</p>}
                                    </div>

                                </div>

                                {/* Contact Numbers */}
                                <div className="row my-3">
                                    <FileUpload 
                                        label="Upload Package Image"
                                        accept="image/*"
                                        multiple={false}
                                        width="100%"
                                        height="50px"
                                        {...register("packageImage", { required: "Package image is required" })}
                                        onChange={handleImageChange}
                                        register={register}
                                        name="packageImage"
                                    />
                                    {/* {errors.packageImage && <p className="text-danger">{errors.packageImage}</p>} */}
                                </div>
                                <h4>More Information</h4>
                                {/* Branch Image */}
                                <div className="row my-5">

                                    <div className="col-md-6">
                                        <InputBox
                                        {...register('office_no')}
                                            label="Office No*"
                                            type="text"
                                            placeholder="Enter Office No*"
                                        />
                                        {errors.office_no && <p className="text-danger">{errors.office_no.message}</p>}
                                    </div>


                                    <div className="col-md-6">
                                        <InputBox
                                        {...register('details')}
                                            label="Details"
                                            type="text"
                                            placeholder="Enter Details"
                                        />
                                        {errors.details && <p className="text-danger">{errors.details.message}</p>}
                                    </div>
                                </div>

                                <h4>Staff Address</h4>
                                <div className="row my-5">

                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('country')}
                                            label="Country "
                                            type="text"
                                            placeholder="Enter Country"
                                        />
                                        {errors.country && <p className="text-danger">{errors.country.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('city')}
                                            label="City"
                                            type="text"
                                            placeholder="Enter City"
                                        />
                                        {errors.city && <p className="text-danger">{errors.city.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                        {...register('postal_code')}
                                            label="Postal Code"
                                            type="text"
                                            placeholder="Enter Postal Code"
                                        />
                                        {errors.postal_code && <p className="text-danger">{errors.postal_code.message}</p>}
                                    </div>
                                </div>

                                {/* <div className="row">
                                    <div className="col-md-12">
                                        <Summernote 
                                        />
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-md-12">
                                    <InputBox
                                        {...register('address')}
                                            label="Address"
                                            type="text"
                                            placeholder="Enter Address"
                                        />
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="d-flex justify-content-center my-4">
                                    <ButtonComponent color="primary" label="Submit Staff Details" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddStaff
