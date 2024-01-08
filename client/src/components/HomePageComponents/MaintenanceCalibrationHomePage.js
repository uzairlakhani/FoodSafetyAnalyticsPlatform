import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MaintenanceCalibrationLogsPage = () => {
    const location = useLocation();
    const showForm = location.pathname.includes("/maintenance-calibration-logs/");

    return (
        <div className="container">
            {!showForm && <h1>Maintenance and Calibration Logs</h1>}
            {!showForm && (
                <div className="nav-bar">
                    <Link to="equipment-maintenance-repair-logs" className="nav-link">Equipment Maintenance and Repair Logs</Link>
                    <Link to="calibration-records" className="nav-link">Calibration Records</Link>
                    <Link to="/" className="nav-link">Back to Home</Link>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default MaintenanceCalibrationLogsPage;
