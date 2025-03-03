import React, { useState } from 'react'
import InputBox from '../../components/ui/InputBox'
import FileUpload from '../../components/ui/FileUpload'
import ButtonComponent from '../../components/ui/Button'
import Summernote from '../../components/ui/Summernote'
import SingleSelect from '../../components/ui/SingleSelect'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    mobile: yup.string().matches(/^[0-9]{10}$/, "Mobile number must be 10 digits").required("Mobile number is required"),
    role: yup.string().required("Role is required"),
    salary: yup.number().positive().integer().required("Salary is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    department: yup.string().required("Department is required"),
    officeNo: yup.string().required("Office No is required"),
    details: yup.string().required("Details are required"),
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    postalCode: yup.string().matches(/^[0-9]{6}$/, "Postal Code must be 6 digits").required("Postal Code is required"),
});

const AddStaff = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    const [selectRoles, setSelectRoles] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    
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
                                            label="Staff First Name"
                                            type="text"
                                            placeholder="Staff First Name"
                                        />
                                        {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                            label="Staff Last Name"
                                            type="text"
                                            placeholder="Staff Last Name"
                                        />
                                        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
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
                                            label="Mobile"
                                            type="number"
                                            placeholder="Enter Mobile Number"
                                        />
                                        {errors.mobile && <p className="text-danger">{errors.mobile.message}</p>}
                                    </div>

                                    <div className="col-md-4">
                                        <SingleSelect
                                            label="Role"
                                            options={[
                                                { value: 1, label: "Account Manager" },
                                                { value: 2, label: "Sales Associate" },
                                                { value: 3, label: "Admin" },
                                                { value: 4, label: "Tell Caller" },
                                                { value: 5, label: "Relationship Manager" },
                                            ]}
                                            selectedValue={selectRoles}  // ✅ Corrected
                                            setSelectedValue={setSelectRoles}  // ✅ Corrected
                                        />
                                        {errors.role && <p className="text-danger">{errors.role.message}</p>}
                                    </div>

                                    <div className="col-md-4">
                                        <InputBox
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
                                setSelectedValue={setSelectedDepartment}  // ✅ Corrected
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
                                    />
                                    {/* {errors.packageImage && <p className="text-danger">{errors.packageImage}</p>} */}
                                </div>
                                <h4>More Information</h4>
                                {/* Branch Image */}
                                <div className="row my-5">

                                    <div className="col-md-6">
                                        <InputBox
                                            label="Office No*"
                                            type="text"
                                            placeholder="Enter Office No*"
                                        />
                                        {errors.officeNo && <p className="text-danger">{errors.officeNo.message}</p>}
                                    </div>


                                    <div className="col-md-6">
                                        <InputBox
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
                                            label="Country "
                                            type="text"
                                            placeholder="Enter Country"
                                        />
                                        {errors.country && <p className="text-danger">{errors.country.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                            label="City"
                                            type="text"
                                            placeholder="Enter City"
                                        />
                                        {errors.city && <p className="text-danger">{errors.city.message}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <InputBox
                                            label="Postal Code"
                                            type="text"
                                            placeholder="Enter Postal Code"
                                        />
                                        {errors.postalCode && <p className="text-danger">{errors.postalCode.message}</p>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <Summernote />
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
