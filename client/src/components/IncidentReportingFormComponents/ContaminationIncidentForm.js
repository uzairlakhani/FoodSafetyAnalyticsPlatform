import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContaminationIncidentForm = () => {
    const [formData, setFormData] = useState({
        incident_date: '',
        location: '',
        description: '',
        corrective_action: '',
        reported_by: ''
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/incident-reporting/contamination-incident-forms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Contamination incident reported successfully');
                setFormData({
                    incident_date: '',
                    location: '',
                    description: '',
                    corrective_action: '',
                    reported_by: ''
            
                });
            } else {
                displayMessage('Failed to report contamination incident');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting contamination incident report');
        }
    };

    return (
        <div className="container">
            <h1>Contamination Incident Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Date of Incident:
                    <input 
                        type="date" 
                        id="incident_date" 
                        name="incident_date" 
                        value={formData.incident_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Location:
                    <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        value={formData.location} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Description of Incident:
                    <textarea 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange}
                        required 
                    ></textarea>
                </label>

                <label>
                    Corrective Action Taken:
                    <textarea 
                        id="corrective_action" 
                        name="corrective_action" 
                        value={formData.corrective_action} 
                        onChange={handleChange}
                    ></textarea>
                </label>

                <label>
                    Reported By:
                    <input 
                        type="text" 
                        id="reported_by" 
                        name="reported_by" 
                        value={formData.reported_by} 
                        onChange={handleChange} 
                    />
                </label>

                <button type="submit">Submit Report</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/incident-reporting" className="btn">Back to Incident Reporting</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default ContaminationIncidentForm;
