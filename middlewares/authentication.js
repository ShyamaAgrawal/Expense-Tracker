const express = require('express');
// const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Middleware function to authenticate user
exports.authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized Master - Invalid token' });
        }

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Error authenticating user: ', error);
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ error: error.message || 'Unauthorized - Invalid token' });
        }
        return res.status(500).json({ error: error.message || 'Internal server error' });
    }

    app.get('/customers', authenticateUser, async (req, res) => {
        // Get all customers from the database and send them back as a response
        try {
            const customers  = await fetchCustomersFormDatabase();
            res.json(customers);

        }
        catch (error) {
            console.error('Error fetching customers:', error);
            res.status(500).json({ message: 'Error fetching customers' });
        }
    })
};