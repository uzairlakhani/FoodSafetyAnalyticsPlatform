import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SupplierQualityAssessmentForm = () => {
    const [formData, setFormData] = useState({
        assessment_date: '',
        supplier_name: '',
        product_evaluated: '',
        quality_rating: '',
        delivery_timeliness: '',
        improvement_areas: '',
        overall_satisfaction: '',
        reviewer_name: '',
        reviewer_comments: ''
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/safety-quality-inspection-forms/supplier-quality-assessment-forms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Supplier quality assessment form submitted successfully');
                setFormData({
                    assessment_date: '',
                    supplier_name: '',
                    product_evaluated: '',
                    quality_rating: '',
                    delivery_timeliness: '',
                    improvement_areas: '',
                    overall_satisfaction: '',
                    reviewer_name: '',
                    reviewer_comments: ''
                });
            } else {
                displayMessage('Failed to submit supplier quality assessment form');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting supplier quality assessment form');
        }
    };

    return (
        <div className="container">
            <h1>Supplier Quality Assessment Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Assessment Date:
                    <input
                        type="date"
                        name="assessment_date"
                        value={formData.assessment_date}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Supplier Name:
                    <input
                        type="text"
                        name="supplier_name"
                        value={formData.supplier_name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Product/Service Evaluated:
                    <input
                        type="text"
                        name="product_evaluated"
                        value={formData.product_evaluated}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Quality Rating:
                    <select
                        name="quality_rating"
                        value={formData.quality_rating}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Rating</option>
                        <option value="poor">Poor</option>
                        <option value="fair">Fair</option>
                        <option value="good">Good</option>
                        <option value="excellent">Excellent</option>
                    </select>
                </label>

                <label>
                    Delivery Timeliness:
                    <select
                        name="delivery_timeliness"
                        value={formData.delivery_timeliness}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Timeliness</option>
                        <option value="ontime">On Time</option>
                        <option value="late">Late</option>
                        <option value="early">Early</option>
                    </select>
                </label>

                <label>
                    Areas for Improvement:
                    <textarea
                        name="improvement_areas"
                        value={formData.improvement_areas}
                        onChange={handleChange}
                    ></textarea>
                </label>

                <label>
                    Overall Satisfaction:
                    <input
                        type="number"
                        name="overall_satisfaction"
                        value={formData.overall_satisfaction}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Reviewer's Name:
                    <input
                        type="text"
                        name="reviewer_name"
                        value={formData.reviewer_name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Reviewer's Comments:
                    <textarea
                        name="reviewer_comments"
                        value={formData.reviewer_comments}
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

export default SupplierQualityAssessmentForm;
