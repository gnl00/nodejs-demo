var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // do something


  // get result
  const rawData = {
    code: 200,
    msg: 'SUCCESS',
    data: [
      {name: 'a', age: 8, gender: 'male'},
      {name: 'b', age: 4, gender: 'female'},
      {name: 'c', age: 7, gender: 'male'},
    ]
  }

  // send result
  res.send(JSON.stringify(rawData))
});

module.exports = router;
