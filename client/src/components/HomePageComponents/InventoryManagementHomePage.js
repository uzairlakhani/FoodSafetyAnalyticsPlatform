import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const InventoryManagementPage = () => {
    const location = useLocation();
    const showForm = location.pathname.includes("/inventory-management/");

    return (
        <div className="container">
            {!showForm && <h1>Inventory Management</h1>}
            {!showForm && (
                <div className="nav-bar">
                    <Link to="food-inventory-entry-forms" className="nav-link">Food Inventory Entry Forms</Link>
                    <Link to="stock-expiration-tracking-forms" className="nav-link">Stock Expiration Tracking Forms</Link>
                    <Link to="/" className="nav-link">Back to Home</Link>
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default InventoryManagementPage;

