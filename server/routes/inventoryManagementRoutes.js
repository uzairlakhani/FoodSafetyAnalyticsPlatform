const express = require('express');
const router = express.Router();

const {
    InventoryItem,
    StockExpirationItem
} = require('../models/InventoryManagementModel');

// Inventory Item
router.post('/food-inventory-entry-forms', async (req, res) => {
    try {
        await InventoryItem.create(req.body);
        console.log('Inventory Item saved successfully');
        res.status(201).send('Inventory Item saved successfully');
    } catch (error) {
        console.error('Error saving Inventory Item:', error);
        res.status(500).send('Error saving Inventory Item');
    }
});

// Stock Expiration Item
router.post('/stock-expiration-tracking-forms', async (req, res) => {
    try {
        await StockExpirationItem.create(req.body);
        console.log('Stock Expiration Item saved successfully');
        res.status(201).send('Stock Expiration Item saved successfully');
    } catch (error) {
        console.error('Error saving Stock Expiration Item:', error);
        res.status(500).send('Error saving Stock Expiration Item');
    }
});

module.exports = router;
