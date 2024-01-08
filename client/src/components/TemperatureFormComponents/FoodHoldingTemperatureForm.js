import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const FoodHoldingTemperatureLogForm = () => {
    const [formData, setFormData] = useState({
        item: '',
        temperature: '',
        log_date: '',
        log_time: '',
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/temperature-monitoring-logs/food-holding-temperature-logs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Food holding temperature log submitted successfully');
                setFormData({
                    item: '',
                    temperature: '',
                    log_date: '',
                    log_time: '',
                    comments: ''
                });
            } else {
                displayMessage('Failed to submit food holding temperature log');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting food holding temperature log');
        }
    };

    return (
        <div className="container">
            <h1>Food Holding Temperature Log Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Item:
                    <input 
                        type="text" 
                        id="item" 
                        name="item" 
                        value={formData.item} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Temperature:
                    <input 
                        type="number" 
                        id="temperature" 
                        name="temperature" 
                        value={formData.temperature} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Date:
                    <input 
                        type="date" 
                        id="log_date" 
                        name="log_date" 
                        value={formData.log_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Time:
                    <input 
                        type="time" 
                        id="log_time" 
                        name="log_time" 
                        value={formData.log_time} 
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
            <Link to="/temperature-monitoring-logs" className="btn">Back to Temperature Logs</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default FoodHoldingTemperatureLogForm;

