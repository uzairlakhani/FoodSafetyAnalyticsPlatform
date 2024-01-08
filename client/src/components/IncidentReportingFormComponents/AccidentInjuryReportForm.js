import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccidentInjuryReportForm = () => {
    const [formData, setFormData] = useState({
        accident_date: '',
        accident_time: '',
        location: '',
        injured_person_name: '',
        description_of_accident: '',
        first_aid_provided: '',
        medical_attention_required: '',
        witness_names: '',
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/incident-reporting/accident-injury-report`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Accident/Injury report submitted successfully');
                setFormData({

                    accident_date: '',
                    accident_time: '',
                    location: '',
                    injured_person_name: '',
                    description_of_accident: '',
                    first_aid_provided: '',
                    medical_attention_required: '',
                    witness_names: '',
                    additional_comments: ''
                });
            } else {
                displayMessage('Failed to submit accident/injury report');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting accident/injury report');
        }
    };

    return (
        <div className="container">
            <h1>Accident/Injury Report Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Accident Date:
                    <input type="date" name="accident_date" value={formData.accident_date} onChange={handleChange} required />
                </label>

                <label>
                    Accident Time:
                    <input type="time" name="accident_time" value={formData.accident_time} onChange={handleChange} required />
                </label>

                <label>
                    Location of Accident:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </label>

                <label>
                    Name of Injured Person:
                    <input type="text" name="injured_person_name" value={formData.injured_person_name} onChange={handleChange} />
                </label>

                <label>
                    Description of Accident:
                    <textarea name="description_of_accident" value={formData.description_of_accident} onChange={handleChange}></textarea>
                </label>

                <label>
                    First Aid Provided? (Yes/No):
                    <input type="text" name="first_aid_provided" value={formData.first_aid_provided} onChange={handleChange} />
                </label>

                <label>
                    Was Medical Attention Required? (Yes/No):
                    <input type="text" name="medical_attention_required" value={formData.medical_attention_required} onChange={handleChange} />
                </label>

                <label>
                    Names of Witnesses (if any):
                    <input type="text" name="witness_names" value={formData.witness_names} onChange={handleChange} />
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

export default AccidentInjuryReportForm;
