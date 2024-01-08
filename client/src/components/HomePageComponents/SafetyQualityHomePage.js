import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const SafetyQualityInspectionFormsPage = () => {

    const location = useLocation();
    const showForm = location.pathname.includes("/safety-quality-inspection-forms/");

    return (
        <div className="container">
            {!showForm && <h1>Safety and Quality Inspection Forms</h1>}
            {!showForm && (
                <div className="nav-bar">
                    <Link to="health-safety-inspection-forms" className="nav-link">Health and Safety Inspection Forms</Link>
                    <Link to="supplier-quality-assessment-forms" className="nav-link">Supplier Quality Assessment Forms</Link>
                    <Link to="/" className="nav-link">Back to Home</Link>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default SafetyQualityInspectionFormsPage;

