const mongoose = require('mongoose');
const Income = require('./Income');
const Expense = require('./Expense');

// Define the schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ // Email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 6 
    },
    income: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Income'
    }],
    expense: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }]
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
