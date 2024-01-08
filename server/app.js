const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const temperatureLogRoutes = require('./routes/temperatureLogRoutes');
const safetyQualityInspectionRoutes = require('./routes/safetyQualityInspectionRoutes');
const incidentReportingRoutes = require('./routes/incidentReportingRoutes');
const inventoryManagementRoutes = require('./routes/inventoryManagementRoutes');
const employeeTrainingHealthRoutes = require('./routes/employeeTrainingHealthRoutes');
const maintenanceCalibrationRoutes = require('./routes/maintenanceCalibrationRoutes');
const userManagementRoutes = require('./routes/userManagementRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup routes
app.use('/temperature-monitoring-logs', temperatureLogRoutes);
app.use('/safety-quality-inspection-forms', safetyQualityInspectionRoutes);
app.use('/incident-reporting', incidentReportingRoutes);
app.use('/inventory-management', inventoryManagementRoutes);
app.use('/employee-training-health-records', employeeTrainingHealthRoutes);
app.use('/maintenance-calibration-logs', maintenanceCalibrationRoutes);
app.use('/user-management', userManagementRoutes);



// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
