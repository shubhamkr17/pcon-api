const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  password : {type:String, default:'12345'}
});

const users= mongoose.model('User',userSchema);
module.exports=users;
