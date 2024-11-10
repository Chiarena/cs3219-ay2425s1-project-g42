const express = require('express');
const router = express.Router();
const historyController = require('../controller/historyController');

router.post('/add', historyController.createHistoryRecord);
router.get('/:userId', historyController.getUserHistory);

module.exports = router;