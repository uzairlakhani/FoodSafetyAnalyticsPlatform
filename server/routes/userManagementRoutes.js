const express = require('express');
const router = express.Router();
UserManagement = require('../models/userManagementModel'); 

// User Management
router.post('/', async (req, res) => {
    try {
        await UserManagement.create(req.body);
        console.log('User saved successfully');
        res.status(201).send('User saved successfully');
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send('Error saving user');
    }
});                     

module.exports = router;

