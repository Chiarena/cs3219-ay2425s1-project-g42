const History = require('../model/historyModel');

exports.createHistoryRecord = async (req, res) => {
    const { userId, questionId, attemptDetails } = req.body;
    try {
        const historyRecord = new History({ userId, questionId, attemptDetails });
        await historyRecord.save();
        res.status(201).json(historyRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserHistory = async (req, res) => {
    const { userId } = req.params;
    try {
        const historyRecord = await History.find({ userId }).populate('questionId');
        res.status(200).json(historyRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};