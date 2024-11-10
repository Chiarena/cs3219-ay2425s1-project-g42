const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true},
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    timestamp: { type: Date, default: Date.now},
    attemptDetails: { type: String },
});

const History = mongoose.model('History', historySchema);

module.exports = History;