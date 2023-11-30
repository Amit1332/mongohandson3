const{ comparePassword, hashpaword } = require('../middlewares')
const jwt = require('jsonwebtoken')
const userShema = require('../models/user')

const secretKey = "amitSingh"


const signup = async(req,res)=>{
    const data = req.body
    if(!data.email || !data.password){
            return res.send({error:"please fill with email and Password"})
        
        }
        const isExist =await userShema.findOne({email:data.email})
        if(isExist){
            return res.send({error:"user already exist"})
        }
        
     data.password = await hashpaword(data.password)
   let user = await userShema.create(data)
    const  token = jwt.sign({user:data.email},secretKey,{expiresIn:1*24*60*60*100})
    res.json({success:true,data:user,token:token, msg:"Register Successfully"})
}


const login = async(req,res)=>{
    const data = req.body  
    if(!data.email || !data.password){
        return res.send({error:"please fill with email and Password"})

    }
    let user  =await userShema.findOne({email:data.email})
   
     if(user){
            const checkpass =comparePassword(data.password,user.password)
            if(checkpass){
                const  token = jwt.sign({user:user.email},secretKey,{expiresIn:1*24*60*60*100})
                res.json({success:true,email:user.email,token:token, msg:`${user.email} Login Successfully`})

            }
            return res.send({error:"Password is incorrect"})



     }
     else{
        res.json({error:"Please Signup first"})
     }
}


module.exports = {signup,login}
  
