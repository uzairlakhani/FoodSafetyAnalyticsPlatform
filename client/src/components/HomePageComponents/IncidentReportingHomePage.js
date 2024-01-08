import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const IncidentComplianceReportingPage = () => {
    const location = useLocation();
    const showForm = location.pathname.includes("/incident-reporting/");

    return (
        <div className="container">
            {!showForm && <h1>Incident and Compliance Reporting</h1>}
            {!showForm && (
                <div className="nav-bar">
                    <Link to="foodborne-illness-report-forms" className="nav-link">Foodborne Illness Report Forms</Link>
                    <Link to="accident-injury-report-forms" className="nav-link">Accident and Injury Report Forms</Link>
                    <Link to="contamination-incident-forms" className="nav-link">Contamination Incident Forms</Link>
                    <Link to="/" className="nav-link">Back to Home</Link>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default IncidentComplianceReportingPage;

