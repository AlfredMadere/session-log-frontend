var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 3,
    username: "thisISINDEX"
  }, {
    id: 4,
    username: "aldDODIndex"
  }]);
});

module.exports = router;
