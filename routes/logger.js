var express = require('express');
var router = express.Router();
var loggerController = require('../controllers/loggerController');

router.get('/', loggerController.getSessionInfo);
router.post('/', loggerController.postLogInfo);

module.exports = router;
