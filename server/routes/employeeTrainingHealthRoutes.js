const express = require('express');
const router = express.Router();

const {
    EmployeeHealthHygieneRecord,
    FoodSafetyTrainingLog
} = require('../models/employeeTrainingHealthModel');

// Employee Health Hygiene Record
router.post('/employee-health-hygiene-records', async (req, res) => {
    try {
        await EmployeeHealthHygieneRecord.create(req.body);
        console.log('Employee Health Hygiene Record saved successfully');
        res.status(201).send('Employee Health Hygiene Record saved successfully');
    } catch (error) {
        console.error('Error saving Employee Health Hygiene Record:', error);
        res.status(500).send('Error saving Employee Health Hygiene Record');
    }
});

// Food Safety Training Log
router.post('/food-safety-training-logs', async (req, res) => {
    try {
        await FoodSafetyTrainingLog.create(req.body);
        console.log('Food Safety Training Log saved successfully');
        res.status(201).send('Food Safety Training Log saved successfully');
    } catch (error) {
        console.error('Error saving Food Safety Training Log:', error);
        res.status(500).send('Error saving Food Safety Training Log');
    }
}
);

module.exports = router;

