import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeHealthHygieneRecordForm = () => {
    const [formData, setFormData] = useState({
        employee_name: '',
        health_status: '',
        hygiene_training_date: '',
        next_scheduled_training_date: '',
        comments: ''
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/employee-training-health-records/employee-health-hygiene-records`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Employee health and hygiene record submitted successfully');
                setFormData({
                    employee_name: '',
                    health_status: '',
                    hygiene_training_date: '',
                    next_scheduled_training_date: '',
                    comments: ''
            
                });
            } else {
                displayMessage('Failed to submit employee health and hygiene record');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting employee health and hygiene record');
        }
    };

    return (
        <div className="container">
            <h1>Employee Health and Hygiene Record Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Employee Name:
                    <input 
                        type="text" 
                        id="employee_name" 
                        name="employee_name" 
                        value={formData.employee_name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Health Status:
                    <input 
                        type="text" 
                        id="health_status" 
                        name="health_status" 
                        value={formData.health_status} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Hygiene Training Date:
                    <input 
                        type="date" 
                        id="hygiene_training_date" 
                        name="hygiene_training_date" 
                        value={formData.hygiene_training_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Next Scheduled Training Date:
                    <input 
                        type="date" 
                        id="next_scheduled_training_date" 
                        name="next_scheduled_training_date" 
                        value={formData.next_scheduled_training_date} 
                        onChange={handleChange} 
                    />
                </label>

                <label>
                    Comments:
                    <textarea 
                        id="comments" 
                        name="comments" 
                        value={formData.comments} 
                        onChange={handleChange}
                    ></textarea>
                </label>

                <button type="submit">Submit</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/employee-training-health-records" className="btn">Back to Training and Health Records</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default EmployeeHealthHygieneRecordForm;
