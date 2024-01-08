import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const TemperatureMonitoringLogsPage = () => {

    const location = useLocation();
    const showForm = location.pathname.includes("/temperature-monitoring-logs/");

    return (
        <div className="container">
            {!showForm && <h1>Temperature Monitoring Logs</h1>}
            {!showForm && (
                <div className="nav-bar">
                    <Link to="refrigeration-temperature-logs" className="nav-link">Refrigeration Temperature Logs</Link>
                    <Link to="freezer-temperature-logs" className="nav-link">Freezer Temperature Logs</Link>
                    <Link to="cooking-temperature-logs" className="nav-link">Cooking Temperature Logs</Link>
                    <Link to="food-holding-temperature-logs" className="nav-link">Food Holding Temperature Logs</Link>
                    <Link to="/" className="nav-link">Back to Home</Link>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default TemperatureMonitoringLogsPage;


