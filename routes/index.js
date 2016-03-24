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
    console.log(JSON.parse(data));
    res.json(JSON.parse(data))
  });
});

router.post('/api/comments', function(req,res,next) {
  fs.readFile(COMMENTS_FILE, function(err,data){
    if(err) {
      console.log(err)
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text
    };
    comments.push(newComment)
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments), function(err){
      if(err) {
        console.log(err);
        process.exit(1);
      }
      res.json(comments);
    })
  });
});

module.exports = router;
