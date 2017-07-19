var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
      res.render('registlive', {
              title: '新規会員登録'
      });
});


module.exports = router;
