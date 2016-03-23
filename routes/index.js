var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs')

var COMMENTS_FILE = path.join(__dirname, '../comments.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/comments', function(req,res, next){
  fs.readFile(COMMENTS_FILE, function(err,data){
    if(err) {
      console.log(err)
      process.exit(1);
    }
    console.log(data);
    res.json(JSON.parse(data))
  });
});

module.exports = router;
