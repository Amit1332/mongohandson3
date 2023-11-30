const mongoose = require('mongoose')

const database = ()=>{
    mongoose.connect('mongodb://localhost:27017/Human_Resourse').then(()=>{
        console.log("connection successfull");
    }).catch((err)=>{
        console.log("no connection ",err);
    })
}

module.exports =database