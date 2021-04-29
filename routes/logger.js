var express = require('express');
var router = express.Router();
var loggerController = require('../controllers/loggerController');

/* GET home page. */
// router.get('/totallyRandomID', function(req, res, next) {
//   res.json({
//     student: 'Billy Bob Student',
//     tutor: "Alfred Madere",
//     duration: 1.5, 
//     startTime: "4:30pm",
//     date: "5/6/21",
//     subject: "Math"
//   });
// });

router.get('/', loggerController.sessionInfo);

module.exports = router;
