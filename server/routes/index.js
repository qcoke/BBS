var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"success":true,"path":"/"});
});

module.exports = router;
