var express = require('express');
const User = require('../schemas/userSchema');
const app = express();
var router = express.Router();

var debug = require('debug')('api:server');


app.use(express.json());

//const User = mongoose.model('User',userSchema);
/* GET users listing. */
router.get('/',(req, res)=> {
  User.find({},function (err,user) {
    if(err) throw err;
    res.json(user)
  });
});

router.post('/',(req,res)=>{
  const user = new User({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
  });
  const result= user.save();

  //res.writeHead(200,{'Content-Type':'text/plain'});
  res.json(user);
  debug(user);
});

module.exports = router;
