import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const EmployeeTrainingHealthRecordsPage = () => {
    const location = useLocation();
    const showForm = location.pathname.includes("/employee-training-health-records/");

    return (
        <div className="container">
            {!showForm && <h1>Employee Training and Health Records</h1>}
            {!showForm && (
                <div className="nav-bar">
                    <Link to="food-safety-training-logs" className="nav-link">Food Safety Training Logs</Link>
                    <Link to="employee-health-hygiene-records" className="nav-link">Employee Health and Hygiene Records</Link>
                    <Link to="/" className="nav-link">Back to Home</Link>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default EmployeeTrainingHealthRecordsPage;
