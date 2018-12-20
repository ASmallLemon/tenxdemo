var express = require('express');
var rp = require('request-promise');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var path = "default";
  if (req.query['path'] !== undefined) {
    path = req.query['path'];
  }
  rp({
    uri: 'http://go-service:8181/' + path
  }).then(function (repos) {
    res.send(repos.toString());
  }).catch(function (err) {
    var errMsg = err.toString();
    console.log(errMsg);
    res.send(errMsg);
  });
});

module.exports = router;
