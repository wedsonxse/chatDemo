var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Chat page redirection and renderization*/
router.get('/chat', function(req, res) {
  res.render('chat', {});
});

module.exports = router;
