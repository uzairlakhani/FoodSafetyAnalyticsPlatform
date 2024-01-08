import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HealthSafetyInspectionForm = () => {
    const [formData, setFormData] = useState({
        inspectionDate: '',
        inspectorName: '',
        location: '',
        complianceStatus: '',
        safetyConcerns: '',
        correctiveActions: '',
        followUpDate: '',
        additionalComments: ''
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/safety-quality-inspection-forms/health-safety-inspection-forms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Health and safety inspection form submitted successfully');
                setFormData({
                    inspection_date: '',
                    inspector_name: '',
                    location: '',
                    compliance_status: '',
                    safety_concerns: '',
                    corrective_actions: '',
                    follow_up_date: '',
                    additional_comments: ''
                });
            } else {
                displayMessage('Failed to submit health and safety inspection form');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting health and safety inspection form');
        }
    };

    return (
        <div className="container">
            <h1>Health and Safety Inspection Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Inspection Date:
                    <input 
                        type="date" 
                        id="inspection_date" 
                        name="inspection_date" 
                        value={formData.inspection_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Inspector Name:
                    <input 
                        type="text" 
                        id="inspector_name" 
                        name="inspector_name" 
                        value={formData.inspector_name} 
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
                    Compliance Status:
                    <select 
                        id="compliance_status" 
                        name="compliance_status" 
                        value={formData.compliance_status} 
                        onChange={handleChange} 
                        required>
                        <option value="">Select Status</option>
                        <option value="compliant">Compliant</option>
                        <option value="non-compliant">Non-Compliant</option>
                    </select>
                </label>

                <label>
                    Safety Concerns Identified:
                    <textarea 
                        id="safety_concerns" 
                        name="safety_concerns" 
                        value={formData.safety_concerns} 
                        onChange={handleChange}
                    ></textarea>
                </label>

                <label>
                    Corrective Actions Taken:
                    <textarea 
                        id="corrective_actions" 
                        name="corrective_actions" 
                        value={formData.corrective_actions} 
                        onChange={handleChange}
                    ></textarea>
                </label>

                <label>
                    Follow-up Date:
                    <input 
                        type="date" 
                        id="follow_up_date" 
                        name="follow_up_date" 
                        value={formData.follow_up_date} 
                        onChange={handleChange} 
                    />
                </label>

                <label>
                    Additional Comments:
                    <textarea 
                        id="additional_comments" 
                        name="additional_comments" 
                        value={formData.additional_comments} 
                        onChange={handleChange}
                    ></textarea>
                </label>

                <button type="submit">Submit</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/safety-quality-inspection-forms" className="btn">Back to Safety and Quality Forms</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default HealthSafetyInspectionForm;
