const mongoose = require('mongoose')

const employee = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastName:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
  
    department:{
        type:String,
        required:true
    },
    
    lastCompany:{
        type:String,
        required:true
    },
    
    lastSalary:{
        type:String,
        required:true
    },
    
    overallExp:{
        type:String,
        required:true
    },
       
    contactInfo:{
        type:String,
        required:true
    },

       
    yearGrad:{
        type:String,
        required:true
    },

       
    gradStream:{
        type:String,
        required:true
    },


})

const  employeeShema =new mongoose.model("employee",employee)
module.exports = employeeShema