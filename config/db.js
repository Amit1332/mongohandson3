// const mongoose = require('mongoose')

// const database = ()=>{
//     mongoose.connect('mongodb://localhost:27017/Human_Resourse').then(()=>{
//         console.log("connection successfull");
//     }).catch((err)=>{
//         console.log("no connection ",err);
//     })
// }

// module.exports =database

const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

async function connectToDatabase() {
 try {
    await client.connect();
    console.log('Connected to the database');
 } catch (error) {
    console.log(error);
 }
}

 function database(){
   try {
    const databas = client.db('human');
    if(databas.collection('employee')){
     return databas

    }

    else{
        const employees =databas.createCollection('employee')

    }

   } catch (error) {
    console.log(error);
   }
}

module.exports ={connectToDatabase,database}