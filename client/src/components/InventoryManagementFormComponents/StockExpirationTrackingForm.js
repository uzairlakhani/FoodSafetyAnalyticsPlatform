import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StockExpirationTrackingForm = () => {
    const [formData, setFormData] = useState({
        product_name: '',
        quantity: '',
        expiration_date: ''

    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const displayMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(''), 5000); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/inventory-management/stock-expiration-tracking-forms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Stock expiration data submitted successfully');
                setFormData({
                    product_name: '',
                    quantity: '',
                    expiration_date: ''
                });
            } else {
                displayMessage('Failed to submit stock expiration data');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting stock expiration data');
        }
    };

    return (
        <div className="container">
            <h1>Stock Expiration Tracking Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input 
                        type="text" 
                        id="product_name" 
                        name="product_name" 
                        value={formData.product_name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Quantity:
                    <input 
                        type="number" 
                        id="quantity" 
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Expiration Date:
                    <input 
                        type="date" 
                        id="expiration_date" 
                        name="expiration_date" 
                        value={formData.expiration_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/inventory-management" className="btn">Back to Inventory Management</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default StockExpirationTrackingForm;
