import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodSafetyTrainingLogForm = () => {
    const [formData, setFormData] = useState({
        employee_name: '',
        training_date: '',
        training_topic: '',
        trainer_name: '',
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/employee-training-health-records/food-safety-training-logs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Food Safety Training Log submitted successfully');
                setFormData({
                    employee_name: '',
                    training_date: '',
                    training_topic: '',
                    trainer_name: '',
                    comments: ''
            
                });
            } else {
                displayMessage('Failed to submit Food Safety Training Log');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting Food Safety Training Log');
        }
    };

    return (
        <div className="container">
            <h1>Food Safety Training Log Form</h1>
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
                    Training Date:
                    <input 
                        type="date" 
                        id="training_date" 
                        name="training_date" 
                        value={formData.training_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Training Topic:
                    <input 
                        type="text" 
                        id="training_topic" 
                        name="training_topic" 
                        value={formData.training_topic} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Trainer Name:
                    <input 
                        type="text" 
                        id="trainer_name" 
                        name="trainer_name" 
                        value={formData.trainer_name} 
                        onChange={handleChange} 
                        required 
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

export default FoodSafetyTrainingLogForm;
