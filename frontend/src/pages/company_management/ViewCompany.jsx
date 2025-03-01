import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewCompany = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const savedCompanies = JSON.parse(localStorage.getItem("companies")) || [];
        if (savedCompanies[index]) {
            setCompany(savedCompanies[index]);
        }
    }, [index]);

    if (!company) {
        return <p>Company not found!</p>;
    }

    // return (
    //     <div className="card">
    //         <div className="card-header d-flex justify-content-between">
    //             <h5>Company Details</h5>
    //             <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
    //         </div>
    //         <div className="card-body">
    //             <p><strong>Company Name:</strong> {company.companyName}</p>
    //             <p><strong>Display Name:</strong> {company.companyDisplayName}</p>
    //             <p><strong>Contact Person:</strong> {company.contactPerson}</p>
    //             <p><strong>Mobile:</strong> {company.mobileNumber}</p>
    //             <p><strong>Landline:</strong> {company.landlineNumber}</p>
    //             <p><strong>Email:</strong> {company.email}</p>
    //             <p><strong>Website:</strong> <a href={company.website} target="_blank">{company.website}</a></p>
    //             <p><strong>Address:</strong> {company.registeredAddress}</p>
    //             <p><strong>About:</strong> {company.aboutCompany}</p>
    //             <p><strong>Location:</strong> {company.city}, {company.state}, {company.country}</p>
    //             <p><strong>Logo:</strong></p>
    //             <img src={company.companyLogo} alt="Company Logo" width="150" />
    //         </div>
    //     </div>
    // );
    return (
        <div className="card shadow-sm">
            <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                <h5 className="mb-0">Company Details</h5>
                <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
                    <i className="fas fa-arrow-left me-2"></i>Back
                </button>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Company Name</label>
                            <p className="fw-bold">{company.companyName}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Display Name</label>
                            <p className="fw-bold">{company.companyDisplayName}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Contact Person</label>
                            <p className="fw-bold">{company.contactPerson}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Mobile</label>
                            <p className="fw-bold">{company.mobileNumber}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Landline</label>
                            <p className="fw-bold">{company.landlineNumber}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Email</label>
                            <p className="fw-bold">{company.email}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Website</label>
                            <p className="fw-bold">
                                <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                    {company.website}
                                </a>
                            </p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Address</label>
                            <p className="fw-bold">{company.registeredAddress}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">About</label>
                            <p className="fw-bold">{company.aboutCompany}</p>
                        </div>
                        <div className="mb-3">
                            <label className="text-muted small mb-1">Location</label>
                            <p className="fw-bold">{company.city}, {company.state}, {company.country}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-muted small mb-1">Logo</label>
                    <div className="border p-3 rounded text-center">
                        <img src={company.companyLogo} alt="Company Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCompany;
