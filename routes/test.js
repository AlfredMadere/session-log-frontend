var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "thisisTest3983"
  }, {
    id: 2,
    username: "addyoTest"
  }]);
});

module.exports = router;
