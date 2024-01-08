import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodborneIllnessReportForm = () => {
    const [formData, setFormData] = useState({
        incident_date: '',
        incident_location: '',
        affected_individuals: '',
        symptoms: '',
        suspected_food: '',
        corrective_action_taken: '',
        additional_comments: ''

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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/incident-reporting/foodborne-illness-report-forms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Illness report submitted successfully');
                setFormData({
                    incident_date: '',
                    incident_location: '',
                    affected_individuals: '',
                    symptoms: '',
                    suspected_food: '',
                    corrective_action_taken: '',
                    additional_comments: ''
                });
            } else {
                displayMessage('Failed to submit illness report');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting illness report');
        }
    };

    return (
        <div className="container">
            <h1>Foodborne Illness Report Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Incident Date:
                    <input type="date" name="incident_date" value={formData.incident_date} onChange={handleChange} required />
                </label>

                <label>
                    Incident Location:
                    <input type="text" name="incident_location" value={formData.incident_location} onChange={handleChange} required />
                </label>

                <label>
                    Number of Affected Individuals:
                    <input type="number" name="affected_individuals" value={formData.affected_individuals} onChange={handleChange} />
                </label>

                <label>
                    Symptoms Observed:
                    <textarea name="symptoms" value={formData.symptoms} onChange={handleChange}></textarea>
                </label>

                <label>
                    Suspected Food:
                    <input type="text" name="suspected_food" value={formData.suspected_food} onChange={handleChange} />
                </label>

                <label>
                    Corrective Action Taken:
                    <textarea name="corrective_action_taken" value={formData.corrective_action_taken} onChange={handleChange}></textarea>
                </label>

                <label>
                    Additional Comments:
                    <textarea name="additional_comments" value={formData.additional_comments} onChange={handleChange}></textarea>
                </label>

                <button type="submit">Submit</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/incident-reporting" className="btn">Back to Incident Reporting</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default FoodborneIllnessReportForm;
