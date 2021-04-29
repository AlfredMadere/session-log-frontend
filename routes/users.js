var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log("users router is called");
  res.json([{
    id: 1,
    username: "samseudfdfasdfadsfaser0l"
  }, {
    id: 2,
    username: "D0loresadUSERH4ze"
  }]);
});

module.exports = router;
