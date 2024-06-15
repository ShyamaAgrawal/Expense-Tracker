const mongoose = require('mongoose');
const incomeSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    source :{
        type: String,
        required: true,
        trim : true
    }
}, { timestamps: true, })
const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;