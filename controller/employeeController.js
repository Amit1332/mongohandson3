const employeeShema = require("../models/employee")

const createEmployee= async(req,res)=>{
try {
    const data = req.body
    if(!data.contactInfo || !data.department || !data.lastCompany){
       return res.status(500).json({msg:"Please fill"})
    }
  

    const isExist =await employeeShema.findOne({contactInfo:data.contactInfo})
    if(isExist){
        return res.status(500).json({msg:"This Employee already Registered"})
    }
    else{
        const employee = await employeeShema.create(data)
        res.status(200).json({success:true,msg:"Employee created successfully", data:employee})
    }

    
} catch (error) {
    console.log(error);
}    

}


const AllEmployee= async(req,res)=>{
    try {
        const employee = await employeeShema.find()
        res.status(200).json({success:true,data:employee})
    } catch (error) {
        console.log(error);
    }
    
}

const filter= async(req,res)=>{
    try {
        const {salary,overallExp,yearGrad} = req.query
        const filterObject = {};
        if (salary) filterObject.salary = {$gt:parseInt(salary)};
        if (overallExp) filterObject.overallExp = {$gt:parseInt(overallExp)};
        if (yearGrad) filterObject.yearGrad = { $gt: parseInt(yearGrad) };
        const data = await employeeShema.find(filterObject)
        res.status(200).json({success:true,data:data , length:data.length})
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {createEmployee,AllEmployee,filter}