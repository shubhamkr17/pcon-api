var express = require('express');
var path = require('path');
var router = express.Router();

var app=express();

/* GET home page. */
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


module.exports = router;
