const express = require('express');
const router = express.Router();
const {
    RefrigerationTemperatureLog,
    FreezerTemperatureLog,
    CookingTemperatureLog,
    FoodHoldingTemperatureLog
} = require('../models/temperatureLogModel');


// Refrigeration Temperature Log
router.post('/refrigeration-temperature-logs', async (req, res) => {
    try {
        await RefrigerationTemperatureLog.create(req.body);
        console.log('Refrigeration Temperature log saved successfully');
        res.status(201).send('Refrigeration Temperature log saved successfully');
    } catch (error) {
        console.error('Error saving refrigeration temperature log:', error);
        res.status(500).send('Error saving refrigeration temperature log');
    }
});

// Freezer Temperature Log
router.post('/freezer-temperature-logs', async (req, res) => {
    try {
        await FreezerTemperatureLog.create(req.body);
        console.log('Freezer Temperature log saved successfully');
        res.status(201).send('Freezer Temperature log saved successfully');
    } catch (error) {
        console.error('Error saving Freezer temperature log:', error);
        res.status(500).send('Error saving Freezer temperature log');
    }
});

// Cooking Temperature Log
router.post('/cooking-temperature-logs', async (req, res) => {
    try {
        await CookingTemperatureLog.create(req.body);
        console.log('Cooking Temperature log saved successfully');
        res.status(201).send('Cooking Temperature log saved successfully');
    } catch (error) {
        console.error('Error saving Cooking temperature log:', error);
        res.status(500).send('Error saving Cooking temperature log');
    }
});

// Food Holding Temperature Log
router.post('/food-holding-temperature-logs', async (req, res) => {
    try {
        await FoodHoldingTemperatureLog.create(req.body);
        console.log('Food Holding Temperature log saved successfully');
        res.status(200).send('Food Holding Temperature log saved successfully');
    } catch (error) {
        console.error('Error saving Food Holding temperature log:', error);
        console.log('error');
        res.status(500).send('Error saving Food Holding temperature log');
    }
});

module.exports = router;
