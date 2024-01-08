import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserManagementForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        role: 'admin'
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/user-management`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('User created successfully');
                setFormData({ username: '', password: '', role: 'admin' });
            } else {
                displayMessage('Failed to create user');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error creating user');
        }
    };

    return (
        <div className="container">
            <h1>User Management Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input 
                        type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Role:
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="staff">Staff</option>
                    </select>
                </label>

                <button type="submit">Create User</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/" className="btn">Home</Link>
        </div>
    );
};

export default UserManagementForm;
