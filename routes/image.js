const imageFolder = './public/gallery/img';
const fs = require('fs');

var express = require('express');
const app = express();
var router = express.Router();
var debug = require('debug')('api:server');



app.use(express.json());

//const User = mongoose.model('User',userSchema);
/* GET users listing. */
router.get('/',(req, res)=> {
  var fileList=[];

  fs.readdirSync(imageFolder).forEach(file => {
  debug(file);
  var imgObj = {
    "imgName":file
  }
  fileList.push(imgObj);
})
res.send(fileList);
});


module.exports = router;
