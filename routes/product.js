/**
 * Created by Memeza on 2/8/2019.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Test Express RESTful API OK');
});

module.exports = router;
