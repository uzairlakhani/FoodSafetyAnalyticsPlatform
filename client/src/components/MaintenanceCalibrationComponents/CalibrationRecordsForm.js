import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CalibrationRecordsForm = () => {
    const [formData, setFormData] = useState({
        equipment_name: '',
        calibration_date: '',
        technician: '',
        calibration_results: '',
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/maintenance-calibration-logs/calibration-records`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Calibration record submitted successfully');
                setFormData({
                    equipment_name: '',
                    calibration_date: '',
                    technician: '',
                    calibration_results: '',
                    comments: ''
            
                });
            } else {
                displayMessage('Failed to submit calibration record');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting calibration record');
        }
    };

    return (
        <div className="container">
            <h1>Calibration Records Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Equipment Name:
                    <input 
                        type="text" 
                        id="equipment_name" 
                        name="equipment_name" 
                        value={formData.equipment_name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Calibration Date:
                    <input 
                        type="date" 
                        id="calibration_date" 
                        name="calibration_date" 
                        value={formData.calibration_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Technician:
                    <input 
                        type="text" 
                        id="technician" 
                        name="technician" 
                        value={formData.technician} 
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Calibration Results:
                    <textarea 
                        id="calibration_results" 
                        name="calibration_results" 
                        value={formData.calibration_results} 
                        onChange={handleChange}
                    ></textarea>
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
            <Link to="/maintenance-calibration-logs" className="btn">Back to Maintenance Logs</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default CalibrationRecordsForm;
