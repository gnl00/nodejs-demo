var express = require('express');
var router = express.Router();

/* GET users listing. */

// host:port/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// host:port/users/a
// router.get('/a', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
