const express = require('express');
const router = express.Router();

const {
    HealthAndSafetyInspection,
    SupplierQualityAssessmentForm
} = require('../models/safetyQualityInspectionModel');

// Health and Safety Inspection Form
router.post('/health-safety-inspection-forms', async (req, res) => {
    try {
        await HealthAndSafetyInspection.create(req.body);
        console.log('Health and Safety Inspection saved successfully');
        res.status(201).send('Health and Safety Inspection saved successfully');
    } catch (error) {
        console.error('Error saving Health and Safety Inspection:', error);
        res.status(500).send('Error saving Health and Safety Inspection');
    }
});

// Supplier Quality Assessment Form
router.post('/supplier-quality-assessment-forms', async (req, res) => {
    try {
        await SupplierQualityAssessmentForm.create(req.body);
        console.log('Supplier Quality Assessment Form saved successfully');
        res.status(201).send('Supplier Quality Assessment Form saved successfully');
    } catch (error) {
        console.error('Error saving Supplier Quality Assessment Form:', error);
        res.status(500).send('Error saving Supplier Quality Assessment Form');
    }
});

module.exports = router;

