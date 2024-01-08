const express = require('express');
const router = express.Router();

const {
    FoodborneIllnessReport,
    ContaminationIncident,
    AccidentInjuryReport  
 } = require('../models/incidentReportingModel');

// Foodborne Illness Report
router.post('/foodborne-illness-report-forms', async (req, res) => {
    try {
        await FoodborneIllnessReport.create(req.body);
        console.log('Foodborne Illness Report saved successfully');
        res.status(201).send('Foodborne Illness Report saved successfully');
    } catch (error) {
        console.error('Error saving Foodborne Illness Report:', error);
        res.status(500).send('Error saving Foodborne Illness Report');
    }
});

// Contamination Incident Report
router.post('/contamination-incident-forms', async (req, res) => {
    try {
        await ContaminationIncident.create(req.body);
        console.log('Contamination Incident Report saved successfully');
        res.status(201).send('Contamination Incident Report saved successfully');
    } catch (error) {
        console.error('Error saving Contamination Incident Report:', error);
        res.status(500).send('Error saving Contamination Incident Report');
    }
});

// Accident Incident Report
router.post('/accident-injury-report', async (req, res) => {
    try {
        await AccidentInjuryReport.create(req.body);
        console.log('Accident Incident Report saved successfully');
        res.status(201).send('Accident Incident Report saved successfully');
    } catch (error) {
        console.error('Error saving Accident Incident Report:', error);
        res.status(500).send('Error saving Accident Incident Report');
    }
});

module.exports = router;

