import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome to the Food Safety Compliance Dashboard</h1>
            <div className="nav-bar">
                <Link to="/temperature-monitoring-logs" className="nav-link">Temperature Monitoring Logs</Link>
                <Link to="/safety-quality-inspection-forms" className="nav-link">Safety and Quality Inspection Forms</Link>
                <Link to="/incident-reporting" className="nav-link">Incident and Compliance Reporting</Link>
                <Link to="/inventory-management" className="nav-link">Inventory Management</Link>
                <Link to="/employee-training-health-records" className="nav-link">Employee Training and Health Records</Link>
                <Link to="/maintenance-calibration-logs" className="nav-link">Maintenance and Calibration Logs</Link>
                <Link to="/user-management" className="nav-link">User Management</Link>
            </div>
        </div>
    );
};

export default HomePage;
