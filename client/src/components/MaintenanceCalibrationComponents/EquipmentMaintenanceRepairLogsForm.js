import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EquipmentMaintenanceRepairLogsForm = () => {
    const [formData, setFormData] = useState({
        equipment_name: '',
        maintenance_date: '',
        repair_details: '',
        performed_by: '',
        next_scheduled_maintenance: ''
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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/maintenance-calibration-logs/equipment-maintenance-repair-logs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                displayMessage('Equipment maintenance/repair log submitted successfully');
                setFormData({
                    equipment_name: '',
                    maintenance_date: '',
                    repair_details: '',
                    performed_by: '',
                    next_scheduled_maintenance: ''
            
                });
            } else {
                displayMessage('Failed to submit equipment maintenance/repair log');
            }
        } catch (error) {
            console.error('Submit error:', error);
            displayMessage('Error submitting equipment maintenance/repair log');
        }
    };

    return (
        <div className="container">
            <h1>Equipment Maintenance and Repair Log Form</h1>
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
                    Maintenance Date:
                    <input 
                        type="date" 
                        id="maintenance_date" 
                        name="maintenance_date" 
                        value={formData.maintenance_date} 
                        onChange={handleChange} 
                        required 
                    />
                </label>

                <label>
                    Repair Details:
                    <textarea 
                        id="repair_details" 
                        name="repair_details" 
                        value={formData.repair_details} 
                        onChange={handleChange}
                    ></textarea>
                </label>

                <label>
                    Performed By:
                    <input 
                        type="text" 
                        id="performed_by" 
                        name="performed_by" 
                        value={formData.performed_by} 
                        onChange={handleChange} 
                    />
                </label>

                <label>
                    Next Scheduled Maintenance:
                    <input 
                        type="date" 
                        id="next_scheduled_maintenance" 
                        name="next_scheduled_maintenance" 
                        value={formData.next_scheduled_maintenance} 
                        onChange={handleChange} 
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
            {message && <div className="form-message">{message}</div>}
            <Link to="/maintenance-calibration-logs" className="btn">Back to Maintenance Logs</Link>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default EquipmentMaintenanceRepairLogsForm;
