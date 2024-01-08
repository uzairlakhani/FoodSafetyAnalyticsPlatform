const express = require('express');
const router = express.Router();

const {
    CalibrationRecord, 
    EquipmentMaintenanceRepairLog
} = require('../models/maintenanceCalibrationModel');


// Calibration Record
router.post('/calibration-records', async (req, res) => {
    try {
        await CalibrationRecord.create(req.body);
        console.log('Calibration Record saved successfully');
        res.status(201).send('Calibration Record saved successfully');
    } catch (error) {
        console.error('Error saving Calibration Record:', error);
        res.status(500).send('Error saving Calibration Record');
    }
});

// Equipment Maintenance/Repair Log
router.post('/equipment-maintenance-repair-logs', async (req, res) => {
    try {
        await EquipmentMaintenanceRepairLog.create(req.body);
        console.log('Equipment Maintenance/Repair Log saved successfully');
        res.status(201).send('Equipment Maintenance/Repair Log saved successfully');
    } catch (error) {
        console.error('Error saving Equipment Maintenance/Repair Log:', error);
        res.status(500).send('Error saving Equipment Maintenance/Repair Log');
    }
});

module.exports = router;


