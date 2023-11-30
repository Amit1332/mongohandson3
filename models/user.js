const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
  
    password:{
        type:String,
        required:true
    },

})

const  userShema =new mongoose.model("user",user)
module.exports = userShema