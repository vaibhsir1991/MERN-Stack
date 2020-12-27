const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
    vehicalNo: String,
    amount: Number,
    isReturn: Boolean,
    validTill: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('registration', RegistrationSchema);
